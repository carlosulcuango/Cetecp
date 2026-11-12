// Prerenderizado: convierte el build de Vite en páginas HTML estáticas.
// Se ejecuta al final de `npm run build`. Para cada ruta escribe un HTML con
// el contenido ya renderizado y su propio título, descripción y canonical.
// También genera sitemap.xml y la página 404.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// React en modo producción: sin avisos de desarrollo y con el mismo HTML que el cliente
process.env.NODE_ENV ??= 'production';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render, getMeta, routes, NOT_FOUND_PATH, SITE_URL } = await import(
  pathToFileURL(ssrEntry).href
);

const template = await readFile(path.join(dist, 'index.html'), 'utf8');

const escapeAttr = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Reemplaza una etiqueta del <head> y falla si no la encuentra, para que un
// cambio en index.html no deje páginas con metadatos equivocados sin avisar.
const replaceOnce = (html, pattern, replacement, label) => {
  if (!pattern.test(html)) throw new Error(`prerender: no se encontró ${label} en index.html`);
  return html.replace(pattern, () => replacement);
};

function buildPage(routePath) {
  const meta = getMeta(routePath);
  const url = `${SITE_URL}${meta.path}`;
  const title = escapeAttr(meta.title);
  const description = escapeAttr(meta.description);

  let html = template;
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`, '<title>');
  html = replaceOnce(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${description}" />`,
    'meta description'
  );
  html = replaceOnce(
    html,
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${title}" />`,
    'og:title'
  );
  html = replaceOnce(
    html,
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${description}" />`,
    'og:description'
  );
  html = replaceOnce(
    html,
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${url}" />`,
    'og:url'
  );
  html = replaceOnce(
    html,
    /<link rel="canonical" href="[^"]*" \/>/,
    meta.noindex
      ? '<meta name="robots" content="noindex" />'
      : `<link rel="canonical" href="${url}" />`,
    'canonical'
  );
  if (meta.jsonLd.length > 0) {
    // "<" escapado para que ningún texto pueda cerrar la etiqueta <script>
    const blocks = meta.jsonLd
      .map(
        (data) =>
          `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`
      )
      .join('\n    ');
    html = replaceOnce(html, /<\/head>/, `  ${blocks}\n  </head>`, '</head>');
  }
  html = replaceOnce(
    html,
    /<div id="root"><\/div>/,
    `<div id="root">${render(routePath)}</div>`,
    '<div id="root">'
  );
  return html;
}

for (const routePath of routes) {
  const file =
    routePath === '/'
      ? path.join(dist, 'index.html')
      : path.join(dist, routePath.slice(1), 'index.html');
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, buildPage(routePath));
}

// Vercel sirve 404.html (con código 404) para cualquier URL que no exista
await writeFile(path.join(dist, '404.html'), buildPage(NOT_FOUND_PATH));

const today = new Date().toISOString().slice(0, 10);
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map(
    (routePath) =>
      `  <url>\n    <loc>${SITE_URL}${routePath}</loc>\n    <lastmod>${today}</lastmod>\n` +
      `    <changefreq>${routePath === '/' ? 'weekly' : 'monthly'}</changefreq>\n` +
      `    <priority>${routePath === '/' ? '1.0' : '0.8'}</priority>\n  </url>`
  ),
  '</urlset>',
  '',
].join('\n');
await writeFile(path.join(dist, 'sitemap.xml'), sitemap);

await rm(path.join(root, 'dist-ssr'), { recursive: true, force: true });

console.log(`prerender: ${routes.length} páginas + 404.html + sitemap.xml`);
