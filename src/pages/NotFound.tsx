import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import { usePageMeta } from '../lib/usePageMeta';

interface NotFoundProps {
  title?: string;
  message?: string;
}

export const NotFound: React.FC<NotFoundProps> = ({
  title = 'Página no encontrada',
  message = 'La página que buscas no existe o ha cambiado de dirección. Explora nuestro catálogo completo en la página principal.',
}) => {
  usePageMeta({ title: `${title} | CETECP`, noindex: true });

  return (
    <main className="min-h-screen bg-warmCream/30 pt-28 pb-16 px-4 flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
        <HelpCircle className="w-8 h-8" />
      </div>
      <h1 className="text-2xl font-bold text-slateCustom-900 mb-2">{title}</h1>
      <p className="text-slate-600 text-sm max-w-md mb-6">{message}</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver a la Página Principal</span>
      </Link>
    </main>
  );
};
