import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  MessageCircle, 
  Brain, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  UserCheck, 
  Sparkles,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { getServiceById, CETECP_INFO } from '../data/cetecpData';

interface ServiceDetailProps {
  onOpenWhatsAppModal: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ onOpenWhatsAppModal }) => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const serviceData = serviceId ? getServiceById(serviceId) : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  if (!serviceData) {
    return (
      <div className="min-h-screen bg-warmCream/30 pt-28 pb-16 px-4 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
          <HelpCircle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-slateCustom-900 mb-2">Servicio no encontrado</h1>
        <p className="text-slate-600 text-sm max-w-md mb-6">
          El servicio que buscas no existe o ha cambiado de dirección. Explora nuestro catálogo completo en la página principal.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a la Página Principal</span>
        </Link>
      </div>
    );
  }

  const { service, category, therapist } = serviceData;

  const therapistWhatsappUrl = therapist
    ? `https://wa.me/${therapist.phoneRaw || '593981827618'}?text=${encodeURIComponent(
        `Hola ${therapist.name}, deseo agendar una consulta sobre el servicio de "${service.title}" en CETECP.`
      )}`
    : `https://wa.me/593981827618?text=${encodeURIComponent(
        `Hola CETECP, deseo solicitar información sobre el servicio de "${service.title}".`
      )}`;

  return (
    <main className="min-h-screen w-full bg-warmCream/20 text-slateCustom-900 pt-20">
      
      {/* ================= HERO / CABECERA OSCURA SUPERIOR ================= */}
      <section className="w-full bg-slateCustom-900 text-white py-14 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-slateCustom-800 relative overflow-hidden">
        
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sage-600/20 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto space-y-6 relative z-10">
          
          {/* Breadcrumbs / Back button */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <Link 
              to="/" 
              className="hover:text-sage-400 flex items-center gap-1 transition-colors font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Inicio</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link 
              to={`/#servicios`} 
              className="hover:text-sage-400 transition-colors"
            >
              {category.title}
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-sage-300 font-semibold truncate">{service.title}</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-extrabold uppercase tracking-widest bg-sage-600/30 text-sage-300 px-3 py-1 rounded-md border border-sage-500/30">
                {category.title}
              </span>
              {service.targetAudience && (
                <span className="text-[11px] font-semibold bg-slateCustom-800 text-slate-300 px-3 py-1 rounded-md border border-slateCustom-700">
                  Dirigido a: {service.targetAudience}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {service.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-sage-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Atención 100% Confidencial</span>
              </div>
              <div className="flex items-center gap-1.5 text-sage-400">
                <UserCheck className="w-4 h-4" />
                <span>Evaluación Estandarizada</span>
              </div>
              <div className="flex items-center gap-1.5 text-sage-400">
                <MapPin className="w-4 h-4" />
                <span>San Antonio de Pichincha, Quito</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CONTENIDO PRINCIPAL DEL SERVICIO ================= */}
      <section className="w-full py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Main Details (Left 7-8 cols) */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* Section: ¿En qué consiste el servicio? */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sage-200/80 shadow-sm space-y-6">
            
            <div className="flex items-center gap-3 border-b border-sage-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center shadow-inner">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-sage-600">Metodología CETECP</span>
                <h2 className="text-xl font-bold text-slateCustom-900">¿En qué consiste el servicio?</h2>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              {service.overview || service.description}
            </p>

            {/* Methodology / Process Steps */}
            {service.methodologies && service.methodologies.length > 0 && (
              <div className="space-y-4 pt-2">
                <h3 className="text-sm font-bold text-slateCustom-900 uppercase tracking-wider">
                  Etapas del Proceso Terapéutico:
                </h3>
                <div className="space-y-3">
                  {service.methodologies.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-3.5 bg-warmCream/40 rounded-2xl border border-sage-100">
                      <div className="w-6 h-6 rounded-full bg-sage-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        {idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>


          {/* Section: Beneficios Clave */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sage-200/80 shadow-sm space-y-6">
            
            <div className="flex items-center gap-3 border-b border-sage-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-inner">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Resultados Obtenidos</span>
                <h2 className="text-xl font-bold text-slateCustom-900">Beneficios Clave</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(service.benefits || [
                "Diagnóstico objetivo y especializado.",
                "Estrategias prácticas para el hogar y escuela.",
                "Acompañamiento empático y continuo.",
                "Instauración de bienestar emocional a largo plazo."
              ]).map((benefit, index) => (
                <div key={index} className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slateCustom-900 font-semibold leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>


        {/* Sidebar / Personalized Scheduling Block (Right 5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Card for Assigned Specialist & Agendamiento */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sage-200 shadow-xl space-y-6 sticky top-28">
            
            <div className="text-center border-b border-sage-100 pb-6 space-y-4">
              <span className="text-[10px] font-extrabold text-sage-600 uppercase tracking-widest bg-sage-50 px-3 py-1 rounded-full border border-sage-200">
                Especialista Encargada
              </span>

              {therapist && (
                <div className="space-y-3">
                  <img
                    src={therapist.image}
                    alt={therapist.name}
                    className="w-24 h-24 rounded-full border-4 border-emerald-600/20 object-cover mx-auto shadow-md"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-slateCustom-900">{therapist.name}</h3>
                    <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider block mt-0.5">
                      {therapist.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic px-2">
                    "{therapist.bio}"
                  </p>
                </div>
              )}
            </div>

            {/* Direct Booking Call to Action */}
            <div className="space-y-4">
              <div className="bg-sage-50 rounded-2xl p-4 border border-sage-200 text-center space-y-1">
                <span className="text-xs font-bold text-slateCustom-900 block">
                  ¿Deseas iniciar este proceso en CETECP?
                </span>
                <span className="text-[11px] text-slate-700 font-semibold block">
                  Atención personalizada previa cita en Quito.
                </span>
              </div>

              <a
                href={therapistWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-700/25 transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Agendar Cita por WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onOpenWhatsAppModal}
                className="w-full text-center text-xs text-sage-700 hover:text-sage-900 font-semibold py-1 block"
              >
                Ver otros números de contacto &rarr;
              </button>
            </div>

            {/* Quick Location & Info */}
            <div className="pt-4 border-t border-sage-100 text-xs space-y-2 text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sage-600 shrink-0" />
                <span>{CETECP_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sage-600 shrink-0" />
                <span>{CETECP_INFO.schedule}</span>
              </div>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
};
