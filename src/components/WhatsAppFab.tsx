import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppFabProps {
  onClick: () => void;
}

// Botón flotante para agendar por WhatsApp, visible en todas las páginas
export const WhatsAppFab: React.FC<WhatsAppFabProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Agendar cita por WhatsApp"
    className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm pl-4 pr-5 py-3.5 rounded-full shadow-xl shadow-emerald-900/30 transition-all hover:-translate-y-0.5 active:scale-95"
  >
    <MessageCircle className="w-5 h-5" />
    <span className="hidden sm:inline">Agendar Cita</span>
  </button>
);
