import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Mail,
  MessageCircle,
  UserCheck,
  ExternalLink,
} from 'lucide-react';
import { getServicesByTherapist, getTherapistById } from '../data/cetecpData';
import { usePageMeta, therapistMeta } from '../lib/usePageMeta';
import { NotFound } from './NotFound';

export const TherapistProfile: React.FC = () => {
  const { therapistId } = useParams<{ therapistId: string }>();
  const therapist = therapistId ? getTherapistById(therapistId) : undefined;

  usePageMeta(
    therapist
      ? therapistMeta(therapist)
      : { title: 'Especialista no encontrada | CETECP', noindex: true }
  );

  if (!therapist) {
    return (
      <NotFound
        title="Especialista no encontrada"
        message="El perfil que buscas no existe o ha cambiado de dirección. Conoce a todo nuestro equipo en la página principal."
      />
    );
  }

  const services = getServicesByTherapist(therapist.id);

  return (
    <main className="min-h-screen w-full bg-warmCream/20 text-slateCustom-900 pt-24 md:pt-28 pb-12">
      {/* Cabecera */}
      <section className="w-full bg-slateCustom-900 text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-slateCustom-800">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-sage-400 flex items-center gap-1 transition-colors font-medium">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Inicio</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link to="/#equipo" className="hover:text-sage-400 transition-colors">
              Nuestro Equipo
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-sage-300 font-semibold truncate">{therapist.name}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <img
              src={therapist.image}
              alt={therapist.name}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white/20 object-cover shadow-lg shrink-0"
            />
            <div className="space-y-3">
              <span className="text-[11px] font-extrabold uppercase tracking-widest bg-sage-600/30 text-sage-300 px-3 py-1 rounded-md border border-sage-500/30 inline-block">
                {therapist.title}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {therapist.name}
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {therapist.bio}
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
                <a
                  href={therapist.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar Consulta por WhatsApp</span>
                </a>
                {therapist.email && (
                  <a
                    href={`mailto:${therapist.email}`}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/20 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{therapist.email}</span>
                  </a>
                )}
                {therapist.linkedinUrl && (
                  <a
                    href={therapist.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/20 transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Especialidades */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sage-200/80 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slateCustom-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-sage-600" />
            Especialidades
          </h2>
          <ul className="space-y-2.5">
            {therapist.specialties.map((specialty) => (
              <li
                key={specialty}
                className="flex items-start gap-2.5 bg-warmCream/40 p-3 rounded-xl border border-sage-100 text-sm font-medium text-slateCustom-900"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{specialty}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Formación */}
        {therapist.education && therapist.education.length > 0 && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sage-200/80 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slateCustom-900 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-sage-600" />
              Formación
            </h2>
            <ul className="space-y-2.5">
              {therapist.education.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 bg-warmCream/40 p-3 rounded-xl border border-sage-100 text-sm text-slate-800"
                >
                  <GraduationCap className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Servicios que atiende */}
        {services.length > 0 && (
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-sage-200/80 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slateCustom-900 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-sage-600" />
              Servicios que atiende en CETECP
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/servicios/${service.id}`}
                  className="p-4 rounded-2xl border border-sage-100 bg-warmCream/30 hover:border-sage-300 hover:shadow-md transition-all group"
                >
                  <span className="font-bold text-sm text-slateCustom-900 group-hover:text-sage-700 flex items-center justify-between gap-2">
                    {service.title}
                    <ChevronRight className="w-4 h-4 shrink-0 text-sage-600" />
                  </span>
                  <span className="text-xs text-slate-600 leading-relaxed block mt-1">
                    {service.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};
