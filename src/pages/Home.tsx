import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  UserCheck, 
  Award, 
  Clock, 
  MapPin, 
  Mail, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  HeartHandshake, 
  Smile, 
  ChevronRight,
  ChevronLeft,
  Star,
  Quote,
  MessageSquarePlus
} from 'lucide-react';
import { CETECP_INFO, THERAPISTS, SERVICE_CATEGORIES, ServiceCategory } from '../data/cetecpData';
import { ReviewModal } from '../components/ReviewModal';

export interface PatientReview {
  id: string;
  author: string;
  role: string;
  rating: number;
  text: string;
  date: string;
}

const INITIAL_REVIEWS: PatientReview[] = [];

interface HomeProps {
  onOpenWhatsAppModal: () => void;
  activeCategoryTab: string;
  onCategoryTabChange: (categoryId: string) => void;
  selectedServiceId: string | null;
}

export const Home: React.FC<HomeProps> = ({ 
  onOpenWhatsAppModal,
  activeCategoryTab,
  onCategoryTabChange,
  selectedServiceId
}) => {
  const [reviews, setReviews] = useState<PatientReview[]>(INITIAL_REVIEWS);
  const [currentReviewIndex, setCurrentReviewIndex] = useState<number>(0);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState<boolean>(false);

  const activeCategoryData: ServiceCategory = 
    SERVICE_CATEGORIES.find(cat => cat.id === activeCategoryTab) || SERVICE_CATEGORIES[0];

  useEffect(() => {
    if (selectedServiceId) {
      const timer = setTimeout(() => {
        const el = document.getElementById(selectedServiceId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [selectedServiceId, activeCategoryTab]);

  const handlePrevReview = () => {
    if (reviews.length === 0) return;
    setCurrentReviewIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    if (reviews.length === 0) return;
    setCurrentReviewIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handleAddReview = (newReview: PatientReview) => {
    setReviews([newReview, ...reviews]);
    setCurrentReviewIndex(0);
  };

  // Dynamic Math Calculations for Reviews
  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews) 
    : 0;
  const formattedAverage = averageRating > 0 ? averageRating.toFixed(1) : '0.0';
  const filledStars = Math.round(averageRating);

  const currentReview = totalReviews > 0 ? reviews[currentReviewIndex] || reviews[0] : null;

  return (
    <main className="min-h-screen w-full bg-warmCream/30 text-slateCustom-900 pt-20">
      
      {/* ================= HERO SECTION ================= */}
      <section id="inicio" className="w-full bg-stone-50/80 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-sage-100 relative overflow-hidden">
        
        {/* Background Subtle Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sage-100/40 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-emerald-100/30 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Column */}
          <div className="space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-sage-100/80 text-sage-800 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-sage-200 shadow-sm">
              <Brain className="w-4 h-4 text-sage-600" />
              <span>{CETECP_INFO.fullName}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slateCustom-900 tracking-tight leading-[1.15]">
              Tu Espacio para el <span className="text-sage-600 bg-gradient-to-r from-sage-600 to-sage-700 bg-clip-text text-transparent">Bienestar Emocional</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Brindamos atención psicológica y psicopedagógica integral para niños, adolescentes, adultos y familias. Un entorno seguro, compasivo y confidencial en San Antonio de Pichincha, Quito.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={onOpenWhatsAppModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-sage-600 hover:bg-sage-700 text-white text-base font-semibold px-7 py-3.5 rounded-2xl shadow-lg shadow-sage-600/25 hover:shadow-xl hover:shadow-sage-600/35 transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Agenda tu Cita</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-sage-50 text-slateCustom-800 font-semibold px-6 py-3.5 rounded-2xl border border-sage-200 shadow-sm hover:border-sage-300 transition-all"
              >
                <span>Ver Servicios</span>
                <ChevronRight className="w-4 h-4 text-sage-600" />
              </a>
            </div>

            {/* Trust Features */}
            <div className="pt-6 border-t border-sage-200/60 grid grid-cols-3 gap-3 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              <div className="space-y-1">
                <div className="flex items-center justify-center lg:justify-start text-sage-600 gap-1 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" /> 100%
                </div>
                <p className="text-xs text-slate-700 font-medium">Confidencial</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center lg:justify-start text-sage-600 gap-1 font-bold text-sm">
                  <UserCheck className="w-4 h-4" /> Especialistas
                </div>
                <p className="text-xs text-slate-700 font-medium">Certificadas</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center lg:justify-start text-sage-600 gap-1 font-bold text-sm">
                  <Heart className="w-4 h-4" /> Atención
                </div>
                <p className="text-xs text-slate-700 font-medium">Personalizada</p>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Patient Reviews Module */}
          <div className="relative w-full">
            
            {/* Outer Decorative Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sage-400 to-emerald-500 rounded-3xl transform rotate-1 scale-102 opacity-20 blur-xl"></div>

            <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-sage-200/90 space-y-6">
              
              {/* Dynamic Module Header */}
              <div className="flex items-center justify-between border-b border-sage-100 pb-4">
                <div>
                  <span className="text-[10px] font-extrabold text-sage-600 uppercase tracking-widest bg-sage-50 px-2.5 py-1 rounded-md border border-sage-200">
                    Experiencias Reales
                  </span>
                  <h2 className="font-bold text-lg text-slateCustom-900 mt-1">
                    Opiniones de Pacientes
                  </h2>
                </div>

                <div className="text-right">
                  {/* Dynamic Stars */}
                  <div className="flex items-center gap-1 justify-end">
                    {[1, 2, 3, 4, 5].map((starIndex) => (
                      <Star
                        key={starIndex}
                        className={`w-4 h-4 ${
                          starIndex <= filledStars
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>

                  {totalReviews > 0 ? (
                    <>
                      <span className="text-xs font-bold text-slateCustom-800 block mt-0.5">
                        {formattedAverage} / 5.0
                      </span>
                      <span className="text-[10px] text-slate-700 font-semibold block">
                        {totalReviews} {totalReviews === 1 ? 'Reseña registrada' : 'Reseñas registradas'}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-xs font-bold text-sage-600 block mt-0.5">
                        Sé el primero en calificar
                      </span>
                      <span className="text-[10px] text-slate-700 font-semibold block">
                        0 Reseñas aún
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Review Card or Empty State */}
              {totalReviews === 0 || !currentReview ? (
                <div className="min-h-[210px] flex flex-col items-center justify-center text-center p-6 bg-warmCream/30 rounded-2xl border border-dashed border-sage-300 space-y-3.5 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-sage-100 text-sage-600 flex items-center justify-center shadow-inner border border-sage-200">
                    <MessageSquarePlus className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 max-w-sm">
                    <h3 className="font-bold text-sm text-slateCustom-900">
                      ¡Sé el primero en compartir tu experiencia!
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Tu testimonio ayuda a otras personas y familias a dar el primer paso hacia su bienestar emocional en CETECP.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsReviewModalOpen(true)}
                    className="mt-1 inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95"
                  >
                    <MessageSquarePlus className="w-4 h-4" />
                    <span>+ Dejar una Reseña</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  
                  {/* Active Review Card */}
                  <div className="min-h-[210px] flex flex-col justify-between space-y-4 bg-warmCream/30 p-5 sm:p-6 rounded-2xl border border-sage-100 relative animate-in fade-in duration-300">
                    <Quote className="w-10 h-10 text-sage-200/60 absolute top-3 right-3 pointer-events-none" />

                    <div className="space-y-3 relative z-10">
                      <div className="flex items-center gap-1">
                        {[...Array(currentReview.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-slateCustom-900 font-medium leading-relaxed italic">
                        "{currentReview.text}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-sage-100/70 text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-sage-600 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                          {currentReview.author[0]}
                        </div>
                        <div>
                          <span className="font-bold text-slateCustom-900 block leading-none">
                            {currentReview.author}
                          </span>
                          <span className="text-[10px] text-sage-600 font-medium mt-0.5 block">
                            {currentReview.role}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-700 font-semibold font-mono">
                        {currentReview.date}
                      </span>
                    </div>
                  </div>

                  {/* Controls & Add Review Button */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                    
                    {/* Slide Indicators & Arrows */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={handlePrevReview}
                          className="w-8 h-8 rounded-xl bg-sage-50 hover:bg-sage-100 text-slateCustom-800 flex items-center justify-center border border-sage-200 transition-colors"
                          title="Reseña anterior"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextReview}
                          className="w-8 h-8 rounded-xl bg-sage-50 hover:bg-sage-100 text-slateCustom-800 flex items-center justify-center border border-sage-200 transition-colors"
                          title="Siguiente reseña"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Dot Indicators */}
                      <div className="flex items-center gap-1.5">
                        {reviews.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setCurrentReviewIndex(idx)}
                            className={`h-2 rounded-full transition-all ${
                              idx === currentReviewIndex ? 'w-5 bg-sage-600' : 'w-2 bg-sage-200'
                            }`}
                            title={`Ir a reseña ${idx + 1}`}
                          ></button>
                        ))}
                      </div>
                    </div>

                    {/* Button to open Review Modal */}
                    <button
                      type="button"
                      onClick={() => setIsReviewModalOpen(true)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold px-4 py-2 rounded-xl border border-emerald-200/80 transition-colors shadow-sm"
                    >
                      <MessageSquarePlus className="w-4 h-4 text-emerald-600" />
                      <span>+ Dejar una Reseña</span>
                    </button>

                  </div>

                </div>
              )}

            </div>

          </div>

        </div>
      </section>


      {/* ================= ENFOQUES DE TERAPIA ================= */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-sage-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-extrabold text-sage-600 uppercase tracking-widest bg-sage-50 px-3 py-1 rounded-full border border-sage-200">
              Áreas de Intervención
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slateCustom-900 tracking-tight">
              Nuestros Enfoques de Terapia
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Diseñamos cada tratamiento según la etapa de vida, adaptando técnicas científicas y humanas para lograr un impacto positivo sostenible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Individual */}
            <div className="bg-warmCream/40 rounded-3xl p-8 border border-sage-200/80 shadow-sm hover:shadow-xl hover:border-sage-400 transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-sage-600 text-white flex items-center justify-center shadow-md shadow-sage-600/20 group-hover:scale-110 transition-transform">
                  <HeartHandshake className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slateCustom-900 group-hover:text-sage-700 transition-colors">
                  Terapia Individual
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Espacio seguro enfocado en la regulación del estrés, manejo de ansiedad, superación de la depresión y desarrollo del autoconocimiento en adultos y jóvenes.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-600" />
                    <span>Manejo del Estrés y Ansiedad</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-600" />
                    <span>Procesos de Duelo y Autoestima</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-600" />
                    <span>Crecimiento Personal</span>
                  </li>
                </ul>
              </div>
              
              <button
                type="button"
                onClick={onOpenWhatsAppModal}
                className="mt-6 w-full py-2.5 px-4 bg-white hover:bg-sage-600 text-slateCustom-900 hover:text-white text-xs font-bold rounded-xl border border-sage-200 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Consultar por Terapia Individual</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 2: Pareja */}
            <div className="bg-warmCream/40 rounded-3xl p-8 border border-sage-200/80 shadow-sm hover:shadow-xl hover:border-sage-400 transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-sage-600 text-white flex items-center justify-center shadow-md shadow-sage-600/20 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slateCustom-900 group-hover:text-sage-700 transition-colors">
                  Terapia de Pareja
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Acompañamiento profesional orientado a mejorar los canales de comunicación, resolver desacuerdos afectivos y reconstruir la confianza mutua.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-600" />
                    <span>Comunicación Asertiva</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-600" />
                    <span>Resolución de Conflictos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-600" />
                    <span>Fortalecimiento del Vínculo</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={onOpenWhatsAppModal}
                className="mt-6 w-full py-2.5 px-4 bg-white hover:bg-sage-600 text-slateCustom-900 hover:text-white text-xs font-bold rounded-xl border border-sage-200 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Consultar por Terapia de Pareja</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 3: Parental & Infantil */}
            <div className="bg-warmCream/40 rounded-3xl p-8 border border-sage-200/80 shadow-sm hover:shadow-xl hover:border-sage-400 transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-sage-600 text-white flex items-center justify-center shadow-md shadow-sage-600/20 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slateCustom-900 group-hover:text-sage-700 transition-colors">
                  Orientación Parental
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Asesoría práctica y respetuosa para padres de familia. Herramientas efectivas para afrontar la crianza, el comportamiento infantil y el rendimiento escolar.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-600" />
                    <span>Crianza Respetuosa y Positiva</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-600" />
                    <span>Manejo de Rabietas y Límites</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-600" />
                    <span>Acompañamiento Psicopedagógico</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={onOpenWhatsAppModal}
                className="mt-6 w-full py-2.5 px-4 bg-white hover:bg-sage-600 text-slateCustom-900 hover:text-white text-xs font-bold rounded-xl border border-sage-200 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Consultar por Orientación Parental</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* ================= CATÁLOGO COMPLETO DE SERVICIOS ================= */}
      <section id="servicios" className="w-full bg-warmCream/20 py-16 lg:py-24 border-b border-sage-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-extrabold text-sage-600 uppercase tracking-widest bg-sage-50 px-3 py-1 rounded-full border border-sage-200">
              Catálogo de Servicios CETECP
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slateCustom-900 tracking-tight">
              Especialidades y Tratamientos
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Selecciona una categoría para explorar los servicios profesionales que ponemos a tu disposición:
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {SERVICE_CATEGORIES.map((category) => {
              const isActive = category.id === activeCategoryTab;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => onCategoryTabChange(category.id)}
                  className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-sage-600 text-white shadow-md shadow-sage-600/20 scale-105'
                      : 'bg-white text-slateCustom-800 hover:bg-sage-50 border border-sage-200'
                  }`}
                >
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Display */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sage-200/80 shadow-xl space-y-8 animate-in fade-in duration-300">
            
            <div className="border-b border-sage-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-slateCustom-900">{activeCategoryData.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{activeCategoryData.description}</p>
              </div>
              <button
                type="button"
                onClick={onOpenWhatsAppModal}
                className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-sm inline-flex items-center gap-2 self-start sm:self-auto shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar por esta Área</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeCategoryData.services.map((service) => {
                const isHighlighted = selectedServiceId === service.id;
                return (
                  <Link
                    key={service.id}
                    id={service.id}
                    to={`/servicios/${service.id}`}
                    className={`p-5 sm:p-6 rounded-2xl border flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-pointer group ${
                      isHighlighted
                        ? 'bg-sage-50/90 border-sage-500 ring-2 ring-sage-400 shadow-lg scale-[1.01]'
                        : 'bg-warmCream/30 border-sage-100 hover:border-sage-300'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-base text-slateCustom-900 group-hover:text-sage-700 transition-colors">
                          {service.title}
                        </h4>
                        {service.targetAudience && (
                          <span className="text-[10px] bg-sage-100 text-sage-800 font-medium px-2 py-0.5 rounded-md shrink-0">
                            {service.targetAudience}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-3 flex items-center justify-between border-t border-sage-100/60 mt-4">
                      <span className="text-[11px] text-slate-700 font-semibold">CETECP Quito</span>
                      <span className="text-xs font-bold text-sage-700 group-hover:text-sage-800 flex items-center gap-1">
                        <span>Ver detalle</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

          </div>

        </div>
      </section>


      {/* ================= POR QUÉ ELEGIRNOS ================= */}
      <section id="nosotros" className="w-full bg-white py-16 lg:py-24 border-b border-sage-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-extrabold text-sage-600 uppercase tracking-widest bg-sage-50 px-3 py-1 rounded-full border border-sage-200">
                Sobre CETECP
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slateCustom-900 tracking-tight leading-tight">
                ¿Por qué elegir nuestro Centro de Terapia?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                En el Centro de Evaluación y Terapia Emocional, Conductual y Psicopedagógica nos apasiona brindar un acompañamiento ético, profesional e interdisciplinario para superar barreras emocionales y de aprendizaje.
              </p>

              <div className="p-6 bg-sage-50 rounded-2xl border border-sage-200 space-y-3">
                <div className="flex items-center gap-3 text-sage-700 font-bold text-sm">
                  <Star className="w-5 h-5 fill-sage-600 text-sage-600" />
                  <span>Compromiso con la Salud Mental</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ubicados estratégicamente en la Parroquia San Antonio de Pichincha, Quito, atendemos con agilidad y dedicación exclusiva a nuestros pacientes.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenWhatsAppModal}
                  className="inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hablar con un Especialista</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Feature 1 */}
              <div className="bg-warmCream/30 p-6 rounded-3xl border border-sage-200/80 shadow-sm space-y-4 hover:border-sage-400 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-sage-600 text-white flex items-center justify-center shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slateCustom-900">
                  Profesionales Expertas
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Terapeutas tituladas y apasionadas con formación continua en evaluación psicológica y psicopedagogía.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-warmCream/30 p-6 rounded-3xl border border-sage-200/80 shadow-sm space-y-4 hover:border-sage-400 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-sage-600 text-white flex items-center justify-center shadow-md">
                  <Smile className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slateCustom-900">
                  Ambiente de Confianza
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Espacios diseñados para generar tranquilidad, donde cada persona o niño se siente escuchado sin prejuicios.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-warmCream/30 p-6 rounded-3xl border border-sage-200/80 shadow-sm space-y-4 hover:border-sage-400 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-sage-600 text-white flex items-center justify-center shadow-md">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slateCustom-900">
                  Enfoque Personalizado
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Planes de intervención únicos basados en la evaluación detallada de las necesidades de cada paciente.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= NUESTRO EQUIPO ================= */}
      <section id="equipo" className="w-full bg-warmCream/30 py-16 lg:py-24 border-b border-sage-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-extrabold text-sage-600 uppercase tracking-widest bg-sage-50 px-3 py-1 rounded-full border border-sage-200">
              Equipo de Especialistas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slateCustom-900 tracking-tight">
              Conoce a Nuestras Terapeutas
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Profesionales dedicadas a acompañarte con empatía, calidez y excelencia en cada etapa de tu proceso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {THERAPISTS.map((therapist) => (
              <div
                key={therapist.id}
                className="bg-white rounded-3xl pt-8 pb-6 px-6 shadow-sm border border-stone-100 hover:shadow-md transition-all duration-200 flex flex-col justify-between text-center"
              >
                <div>
                  <img
                    src={therapist.image}
                    alt={therapist.name}
                    className="w-48 h-48 rounded-full border-4 border-emerald-600/20 object-cover mx-auto mb-4 shadow-md"
                  />
                  <h3 className="font-bold text-lg text-slateCustom-900 mb-1">
                    {therapist.name}
                  </h3>
                  <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider mb-3 block">
                    {therapist.title}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {therapist.bio}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={therapist.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs py-2.5 px-4 rounded-xl shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Agendar Consulta</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= UBICACIÓN Y CONTACTO ================= */}
      <section id="contacto" className="w-full bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-extrabold text-sage-600 uppercase tracking-widest bg-sage-50 px-3 py-1 rounded-full border border-sage-200">
              Visítanos y Agenda
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slateCustom-900 tracking-tight">
              Ubicación y Contacto
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Estamos ubicados en Quito, Parroquia San Antonio de Pichincha. Atendemos previa cita para tu comodidad y privacidad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Details Card */}
            <div className="lg:col-span-5 bg-warmCream/40 rounded-3xl p-6 sm:p-8 border border-sage-200 shadow-xl space-y-6">
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slateCustom-900">
                  {CETECP_INFO.name}
                </h3>
                <p className="text-xs text-sage-600 font-semibold">
                  {CETECP_INFO.fullName}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                
                <div className="flex items-start justify-between gap-3 p-3.5 bg-white rounded-2xl border border-sage-100">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slateCustom-900 block">Dirección:</span>
                      <span className="text-slate-600 block">{CETECP_INFO.location}</span>
                      <span className="text-[11px] text-slate-700 font-semibold font-mono block mt-0.5">Código Plus: XHQ3+4JM Quito</span>
                    </div>
                  </div>
                  <a
                    href={CETECP_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-3 py-2 rounded-xl shadow-sm transition-all hover:shadow-md shrink-0"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Cómo llegar</span>
                  </a>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-sage-100">
                  <Mail className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slateCustom-900 block">Correo Electrónico:</span>
                    <a
                      href={`mailto:${CETECP_INFO.email}`}
                      className="text-sage-700 hover:underline font-medium"
                    >
                      {CETECP_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-sage-100">
                  <Clock className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slateCustom-900 block">Horario de Atención:</span>
                    <span className="text-slate-600">{CETECP_INFO.schedule}</span>
                  </div>
                </div>

              </div>

              <div className="pt-2 space-y-3">
                <span className="text-xs font-bold text-slateCustom-900 uppercase tracking-wider block">
                  Citas directas por teléfono / WhatsApp:
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {THERAPISTS.map((t) => (
                    <a
                      key={t.id}
                      href={t.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white hover:bg-emerald-50 rounded-xl border border-sage-200 flex flex-col justify-between transition-colors group"
                    >
                      <span className="text-xs font-bold text-slateCustom-900 group-hover:text-emerald-700">
                        {t.name}
                      </span>
                      <span className="text-[11px] text-emerald-600 font-mono font-semibold flex items-center gap-1 mt-1">
                        <MessageCircle className="w-3.5 h-3.5" />
                        {t.phone}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Google Maps Iframe */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-3 border border-sage-200 shadow-xl overflow-hidden min-h-[400px]">
              <iframe
                title="Ubicación CETECP San Antonio de Pichincha Quito"
                src={CETECP_INFO.iframeSrc}
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '1.25rem' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px] border-0"
              ></iframe>
            </div>

          </div>

        </div>
      </section>

      {/* Dynamic Modal for Submitting a New Patient Review */}
      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onAddReview={handleAddReview}
      />

    </main>
  );
};
