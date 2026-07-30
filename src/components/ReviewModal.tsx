import React, { useState } from 'react';
import { X, Star, MessageSquarePlus, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (review: {
    id: string;
    author: string;
    role: string;
    rating: number;
    text: string;
    date: string;
  }) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, onAddReview }) => {
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('Terapia Individual');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newReview = {
      id: `rev-${Date.now()}`,
      author: author.trim() || 'Paciente Anónimo',
      role: role || 'Atención General CETECP',
      rating,
      text: text.trim(),
      date: 'Hace un momento',
    };

    onAddReview(newReview);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setAuthor('');
      setText('');
      setRating(5);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slateCustom-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-sage-100 overflow-hidden transform animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-sage-600 to-sage-700 text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <MessageSquarePlus className="w-5 h-5 text-emerald-200" />
            <h3 className="text-xl font-bold text-white tracking-tight">
              Dejar una Reseña
            </h3>
          </div>
          <p className="text-sage-100 text-xs leading-relaxed">
            Tu opinión es muy valiosa para nosotros y ayuda a otras personas a dar el primer paso hacia su bienestar emocional.
          </p>
        </div>

        {/* Content / Form */}
        <div className="p-6 space-y-4 bg-warmCream/20">
          
          {isSuccess ? (
            <div className="py-8 text-center space-y-3 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slateCustom-900">¡Muchas Gracias!</h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Tu reseña ha sido registrada y publicada exitosamente en CETECP.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Star Rating Selection */}
              <div className="space-y-1.5 text-center">
                <label className="text-xs font-bold text-slateCustom-900 uppercase tracking-wider block">
                  Calificación general:
                </label>
                <div className="flex items-center justify-center gap-1.5 pt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 focus:outline-none transform hover:scale-115 transition-transform"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          (hoverRating || rating) >= star
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Author / Alias */}
              <div className="space-y-1">
                <label htmlFor="review-author" className="text-xs font-bold text-slateCustom-800 block">
                  Tu Nombre o Iniciales <span className="text-slate-700 font-medium">(Opcional por confidencialidad)</span>
                </label>
                <input
                  id="review-author"
                  type="text"
                  placeholder="Ej. María G. o Paciente Anónimo"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-sage-200 text-xs text-slateCustom-900 focus:outline-none focus:ring-2 focus:ring-sage-500 bg-white"
                />
              </div>

              {/* Service Selection */}
              <div className="space-y-1">
                <label htmlFor="review-service" className="text-xs font-bold text-slateCustom-800 block">
                  Servicio recibido
                </label>
                <select
                  id="review-service"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-sage-200 text-xs text-slateCustom-900 focus:outline-none focus:ring-2 focus:ring-sage-500 bg-white"
                >
                  <option value="Terapia Individual">Terapia Individual (Adultos/Jóvenes)</option>
                  <option value="Terapia Psicopedagógica">Terapia Psicopedagógica e Infantil</option>
                  <option value="Terapia de Pareja">Terapia de Pareja</option>
                  <option value="Orientación Parental">Orientación Parental y Crianza</option>
                  <option value="Evaluación Integral">Evaluación Psicológica / Neuropsicológica</option>
                </select>
              </div>

              {/* Review Text */}
              <div className="space-y-1">
                <label htmlFor="review-text" className="text-xs font-bold text-slateCustom-800 block">
                  Tu Experiencia o Comentario <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="review-text"
                  rows={4}
                  required
                  placeholder="Escribe tu experiencia en CETECP (ej. Excelente atención, me sentí escuchado y apoyado...)"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-sage-200 text-xs text-slateCustom-900 focus:outline-none focus:ring-2 focus:ring-sage-500 bg-white resize-none"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 p-3 bg-sage-50 rounded-xl border border-sage-100 text-[11px] text-slate-600">
                <ShieldCheck className="w-4 h-4 text-sage-600 shrink-0" />
                <span>Tu información se trata con total confidencialidad.</span>
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-sage-600 hover:bg-sage-700 text-white text-xs font-semibold rounded-xl shadow-md transition-colors"
                >
                  Publicar Reseña
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};
