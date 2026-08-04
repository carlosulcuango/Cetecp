import React from 'react';
import { X, MessageCircle, Phone, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';
import { THERAPISTS, CETECP_INFO } from '../data/cetecpData';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slateCustom-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-sage-100 overflow-hidden transform animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-sage-600 to-sage-700 text-white p-6 sm:p-8 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 mb-2">
            <span className="bg-emerald-500/30 text-emerald-100 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-400/30 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Atención Directa
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Selecciona a tu Terapeuta
          </h3>
          <p className="text-sage-100 text-xs sm:text-sm mt-1 leading-relaxed">
            Te atenderemos personalmente para responder tus dudas y agendar tu primera cita en {CETECP_INFO.name}.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto bg-warmCream/30">
          
          {THERAPISTS.map((therapist) => (
            <div
              key={therapist.id}
              className="bg-white rounded-2xl p-5 border border-sage-200/80 shadow-sm hover:shadow-md transition-all hover:border-sage-400 group"
            >
              <div className="flex items-start gap-4">
                <img
                  src={therapist.image}
                  alt={therapist.name}
                  className="w-14 h-14 rounded-2xl object-cover shrink-0 border border-sage-200 shadow-sm"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-slateCustom-900 text-base group-hover:text-sage-700 transition-colors truncate">
                      {therapist.name}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-medium border border-emerald-200/60 shrink-0">
                      <UserCheck className="w-3 h-3" />
                      Disponible
                    </span>
                  </div>

                  <p className="text-xs text-sage-600 font-semibold mt-0.5">
                    {therapist.title}
                  </p>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {therapist.bio}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {therapist.specialties.slice(0, 2).map((spec, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-sage-50 text-sage-700 font-medium px-2 py-0.5 rounded-md border border-sage-100"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-100">
                    <div className="inline-flex items-center gap-2 whitespace-nowrap text-xs font-mono text-slateCustom-800 font-medium">
                      <Phone className="w-3.5 h-3.5 shrink-0 text-sage-600" />
                      <span className="whitespace-nowrap tracking-wide">{therapist.phone || '098 182 7618'}</span>
                    </div>

                    <a
                      href={therapist.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Contactar a ${therapist.name} por WhatsApp`}
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-xl shadow-sm transition-all group-hover:scale-[1.02]"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span className="whitespace-nowrap">Contactar por WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-80" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="p-3.5 bg-sage-50/80 rounded-2xl border border-sage-200/60 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-sage-600 shrink-0" />
            <p className="text-[11px] text-slate-700 font-semibold leading-snug">
              Atención 100% confidencial y profesional. Todas las consultas son recibidas directamente por las especialistas.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slateCustom-50 border-t border-sage-100 text-center">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors"
          >
            Cerrar ventana
          </button>
        </div>
      </div>
    </div>
  );
};
