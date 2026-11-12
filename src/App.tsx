import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { track } from '@vercel/analytics';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { ServiceDetail } from './pages/ServiceDetail';
import { TherapistProfile } from './pages/TherapistProfile';
import { WhatsAppFab } from './components/WhatsAppFab';
import { SERVICE_CATEGORIES } from './data/cetecpData';

// El modal de WhatsApp se carga solo cuando se abre
const WhatsAppModal = lazy(() =>
  import('./components/WhatsAppModal').then((module) => ({ default: module.WhatsAppModal }))
);

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Con hash (p. ej. /#servicios) se desplaza a la sección; sin hash, al inicio
    if (hash) {
      const element = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

export const AppContent: React.FC = () => {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState<boolean>(false);
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>(SERVICE_CATEGORIES[0].id);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Mide cuántas visitas terminan en un contacto: registra cada clic en un
  // enlace de WhatsApp, con la página desde la que se hizo y el número de destino.
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href*="wa.me/"]');
      if (!link) return;
      const numero = link.getAttribute('href')?.match(/wa\.me\/(\d+)/)?.[1] ?? '';
      track('clic_whatsapp', { pagina: window.location.pathname, numero });
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleOpenWhatsAppModal = () => {
    setIsWhatsAppModalOpen(true);
  };

  const handleCloseWhatsAppModal = () => {
    setIsWhatsAppModalOpen(false);
  };

  const handleSelectServiceCategory = (categoryId: string, serviceId?: string) => {
    setActiveCategoryTab(categoryId);
    setSelectedServiceId(serviceId || null);

    const targetId = serviceId || 'servicios';
    const element = document.getElementById(targetId) || document.querySelector('#servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-warmCream/30 text-slateCustom-900 font-sans antialiased selection:bg-sage-200 selection:text-sage-900">
      <ScrollToTop />

      {/* Navigation Header */}
      <Navbar
        onSelectServiceCategory={handleSelectServiceCategory}
        onOpenWhatsAppModal={handleOpenWhatsAppModal}
      />

      {/* Router View - Home loads synchronously for instant FCP/LCP */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onOpenWhatsAppModal={handleOpenWhatsAppModal}
              activeCategoryTab={activeCategoryTab}
              onCategoryTabChange={(catId) => {
                setActiveCategoryTab(catId);
                setSelectedServiceId(null);
              }}
              selectedServiceId={selectedServiceId}
            />
          }
        />

        <Route
          path="/servicios/:serviceId"
          element={
            <ServiceDetail onOpenWhatsAppModal={handleOpenWhatsAppModal} />
          }
        />

        <Route path="/equipo/:therapistId" element={<TherapistProfile />} />

        {/* Cualquier otra ruta: página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer */}
      <Footer />

      {!isWhatsAppModalOpen && <WhatsAppFab onClick={handleOpenWhatsAppModal} />}

      {/* Direct WhatsApp Therapist Selection Modal (Lazy) */}
      <Suspense fallback={null}>
        {isWhatsAppModalOpen && (
          <WhatsAppModal
            isOpen={isWhatsAppModalOpen}
            onClose={handleCloseWhatsAppModal}
          />
        )}
      </Suspense>

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
