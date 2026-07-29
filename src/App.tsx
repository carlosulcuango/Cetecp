import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppModal } from './components/WhatsAppModal';
import { Home } from './pages/Home';
import { ServiceDetail } from './pages/ServiceDetail';
import { SERVICE_CATEGORIES } from './data/cetecpData';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const AppContent: React.FC = () => {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState<boolean>(false);
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>(SERVICE_CATEGORIES[0].id);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

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

      {/* Router View */}
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
            <ServiceDetail
              onOpenWhatsAppModal={handleOpenWhatsAppModal}
            />
          }
        />

        {/* Fallback route */}
        <Route
          path="*"
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
      </Routes>

      {/* Footer */}
      <Footer />

      {/* Direct WhatsApp Therapist Selection Modal */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={handleCloseWhatsAppModal}
      />
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
