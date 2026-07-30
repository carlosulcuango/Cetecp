import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ClipboardCheck, 
  Brain,
  Sparkles, 
  HeartHandshake, 
  Users, 
  MessageCircle
} from 'lucide-react';
import { SERVICE_CATEGORIES, CETECP_INFO } from '../data/cetecpData';

const iconMap: Record<string, React.ReactNode> = {
  ClipboardCheck: <ClipboardCheck className="w-5 h-5 text-sage-600" />,
  Brain: <Brain className="w-5 h-5 text-sage-600" />,
  Sparkles: <Sparkles className="w-5 h-5 text-sage-600" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-sage-600" />,
  Users: <Users className="w-5 h-5 text-sage-600" />
};

interface NavbarProps {
  onSelectServiceCategory: (categoryId: string, serviceId?: string) => void;
  onOpenWhatsAppModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectServiceCategory, onOpenWhatsAppModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleServiceItemClick = (serviceId: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
    navigate(`/servicios/${serviceId}`);
  };

  const handleCategoryClick = (categoryId: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        onSelectServiceCategory(categoryId);
      }, 100);
    } else {
      onSelectServiceCategory(categoryId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-4'
          : 'bg-warmCream/90 backdrop-blur-sm py-4 border-b border-sage-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zona Izquierda (Logo) */}
          <div className="flex-1 flex items-center pr-4">
            <Link
              to="/"
              onClick={() => {
                setMobileMenuOpen(false);
                setServicesDropdownOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center group focus:outline-none"
            >
              <img
                src="/images/logo.png"
                alt={CETECP_INFO.fullName}
                className="h-12 md:h-14 w-auto max-w-[220px] object-contain"
              />
            </Link>
          </div>

          {/* Zona Centro (Menú de navegación) */}
          <nav className="flex-1 justify-center hidden md:flex items-center space-x-6">
            <Link
              to="/"
              onClick={() => handleNavClick('#inicio')}
              className="px-3 py-2 text-sm font-medium text-slateCustom-800 hover:text-sage-600 rounded-lg hover:bg-sage-50 transition-colors whitespace-nowrap"
            >
              Inicio
            </Link>

            {/* Services Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => handleNavClick('#servicios')}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slateCustom-800 hover:text-sage-600 rounded-lg hover:bg-sage-50 transition-colors whitespace-nowrap"
                aria-expanded={servicesDropdownOpen}
              >
                <span>Servicios</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-sage-600' : ''
                  }`}
                />
              </button>

              {/* Mega Dropdown Panel */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[1020px] max-w-[95vw] bg-white rounded-2xl shadow-xl border border-sage-100 p-6 grid grid-cols-5 gap-5 animate-in fade-in slide-in-from-top-2 duration-200">
                  {SERVICE_CATEGORIES.map((category) => (
                    <div key={category.id} className="flex flex-col space-y-3">
                      <button
                        type="button"
                        onClick={() => handleCategoryClick(category.id)}
                        className="flex items-center gap-2 pb-2 border-b border-sage-100 text-left group hover:border-sage-400 transition-colors w-full"
                      >
                        {iconMap[category.iconName]}
                        <h4 className="font-semibold text-sm text-slateCustom-900 group-hover:text-sage-600 transition-colors leading-snug">
                          {category.title}
                        </h4>
                      </button>
                      
                      <ul className="space-y-2">
                        {category.services.map((service) => (
                          <li key={service.id}>
                            <button
                              type="button"
                              onClick={() => handleServiceItemClick(service.id)}
                              className="text-xs text-slateCustom-800 hover:text-sage-600 hover:translate-x-0.5 transition-all text-left block leading-snug w-full font-medium"
                            >
                              {service.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="col-span-5 bg-sage-50 rounded-xl p-3 flex items-center justify-between border border-sage-100 mt-2">
                    <span className="text-xs font-medium text-slateCustom-800">
                      ¿Necesitas orientación para saber qué terapia es adecuada?
                    </span>
                    <button
                      type="button"
                      onClick={() => handleNavClick('#contacto')}
                      className="text-xs font-semibold text-sage-700 hover:text-sage-800 flex items-center gap-1"
                    >
                      Consultar con una especialista &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('#nosotros')}
              className="px-3 py-2 text-sm font-medium text-slateCustom-800 hover:text-sage-600 rounded-lg hover:bg-sage-50 transition-colors whitespace-nowrap"
            >
              Sobre Nosotros
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('#equipo')}
              className="px-3 py-2 text-sm font-medium text-slateCustom-800 hover:text-sage-600 rounded-lg hover:bg-sage-50 transition-colors whitespace-nowrap"
            >
              Nuestro Equipo
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('#contacto')}
              className="px-3 py-2 text-sm font-medium text-slateCustom-800 hover:text-sage-600 rounded-lg hover:bg-sage-50 transition-colors whitespace-nowrap"
            >
              Contacto
            </button>
          </nav>

          {/* Zona Derecha (Botón "Agendar Cita") */}
          <div className="flex-1 justify-end hidden md:flex items-center">
            <button
              type="button"
              onClick={onOpenWhatsAppModal}
              className="inline-flex items-center justify-center gap-2 bg-sage-600 hover:bg-sage-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.98] whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar Cita</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenWhatsAppModal}
              className="bg-sage-600 text-white p-2 rounded-lg text-xs font-medium flex items-center justify-center"
              title="Agendar Cita por WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slateCustom-800 hover:text-sage-600 rounded-lg hover:bg-sage-50 focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-sage-100 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            <button
              type="button"
              onClick={() => handleNavClick('#inicio')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-slateCustom-900 hover:bg-sage-50 hover:text-sage-600"
            >
              Inicio
            </button>

            {/* Mobile Accordion for Services */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slateCustom-900 hover:bg-sage-50 hover:text-sage-600"
              >
                <span>Servicios</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    mobileServicesOpen ? 'rotate-180 text-sage-600' : ''
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-2 space-y-4 bg-sage-50/50 rounded-xl my-1 border border-sage-100">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="space-y-1">
                      <button
                        type="button"
                        onClick={() => handleCategoryClick(cat.id)}
                        className="font-semibold text-xs text-sage-700 uppercase tracking-wider flex items-center gap-1.5 pt-1 text-left w-full hover:text-sage-900"
                      >
                        {iconMap[cat.iconName]}
                        {cat.title}
                      </button>
                      
                      <div className="pl-6 space-y-1">
                        {cat.services.map((svc) => (
                          <button
                            key={svc.id}
                            type="button"
                            onClick={() => handleServiceItemClick(svc.id)}
                            className="block py-1 text-xs text-slateCustom-800 hover:text-sage-600 text-left w-full font-medium"
                          >
                            • {svc.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('#nosotros')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-slateCustom-900 hover:bg-sage-50 hover:text-sage-600"
            >
              Sobre Nosotros
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('#equipo')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-slateCustom-900 hover:bg-sage-50 hover:text-sage-600"
            >
              Nuestro Equipo
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('#contacto')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-slateCustom-900 hover:bg-sage-50 hover:text-sage-600"
            >
              Contacto
            </button>

            <div className="pt-3 border-t border-sage-100">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-sage-600 hover:bg-sage-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Agendar Cita en WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
