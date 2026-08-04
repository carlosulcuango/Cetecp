import React from 'react';
import { 
  MapPin, 
  Mail, 
  MessageCircle, 
  Clock, 
  Heart, 
  ExternalLink 
} from 'lucide-react';
import { CETECP_INFO, THERAPISTS } from '../data/cetecpData';

export const Footer: React.FC = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slateCustom-900 text-slate-300 pt-16 pb-8 border-t border-slateCustom-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slateCustom-800">
          
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.webp"
                alt="Logo de CETECP"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white tracking-tight">
                  {CETECP_INFO.name}
                </span>
                <span className="text-xs text-sage-400 font-medium">
                  {CETECP_INFO.slogan}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {CETECP_INFO.description}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={CETECP_INFO.facebookUrl || "https://www.facebook.com/share/1AbPLvRGt6/"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de CETECP"
                className="w-9 h-9 rounded-lg bg-slateCustom-800 hover:bg-sage-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={CETECP_INFO.instagramUrl || "https://www.instagram.com/psicetecp?igsh=bWJ2cjZyenhhdWR1"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de CETECP"
                className="w-9 h-9 rounded-lg bg-slateCustom-800 hover:bg-sage-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={THERAPISTS[0].whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp CETECP"
                className="w-9 h-9 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-semibold border-b border-slateCustom-800 pb-2">
              Navegación Rápida
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#inicio');
                  }}
                  className="hover:text-sage-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sage-500">&rsaquo;</span> Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#servicios');
                  }}
                  className="hover:text-sage-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sage-500">&rsaquo;</span> Servicios Psicológicos
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#nosotros');
                  }}
                  className="hover:text-sage-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sage-500">&rsaquo;</span> Sobre CETECP
                </a>
              </li>
              <li>
                <a
                  href="#equipo"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#equipo');
                  }}
                  className="hover:text-sage-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sage-500">&rsaquo;</span> Nuestras Terapeutas
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contacto');
                  }}
                  className="hover:text-sage-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sage-500">&rsaquo;</span> Ubicación y Citas
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Therapists Contact */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-semibold border-b border-slateCustom-800 pb-2">
              Atención Profesional
            </h3>
            <div className="space-y-3 pt-1">
              <a
                href="https://wa.me/593981827618?text=Hola,%20deseo%20solicitar%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-3 px-4 rounded-xl shadow-sm transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Cita por WhatsApp</span>
              </a>

              <p className="text-xs text-slate-400 leading-relaxed">
                Atención personalizada para niños, adolescentes y adultos.
              </p>

              <div>
                <a
                  href="/#equipo"
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      handleNavClick('#equipo');
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors mt-2"
                >
                  <span>Ver todo nuestro equipo médico &rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-semibold border-b border-slateCustom-800 pb-2">
              Contacto y Ubicación
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sage-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Ubicación:</span>
                  <span className="text-slate-400 text-xs leading-relaxed block">
                    {CETECP_INFO.location}
                  </span>
                  <a
                    href={CETECP_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-sage-400 hover:underline inline-flex items-center gap-1 mt-1"
                  >
                    <span>Ver mapa interactivo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sage-400 shrink-0" />
                <div>
                  <span className="text-white font-medium block text-xs">Correo Electrónico:</span>
                  <a
                    href={`mailto:${CETECP_INFO.email}`}
                    className="text-slate-300 hover:text-sage-400 text-xs transition-colors"
                  >
                    {CETECP_INFO.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sage-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block text-xs">Horario de Atención:</span>
                  <span className="text-slate-400 text-xs">{CETECP_INFO.schedule}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {CETECP_INFO.name}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Diseñado con dedicación para el bienestar emocional</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};
