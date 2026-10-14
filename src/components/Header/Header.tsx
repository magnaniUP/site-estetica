import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, getWhatsAppUrl, WHATSAPP_PHONE_NUMBER } from '../../constants/navigation';
import logoImg from '../../assets/logo.png';

interface HeaderProps {
  activeSection?: string;
  onNavigate?: (id: string) => void;
  defaultMobileMenuOpen?: boolean;
}

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const Header: React.FC<HeaderProps> = ({
  activeSection: controlledActiveSection,
  onNavigate,
  defaultMobileMenuOpen = false,
}) => {
  const [internalActiveSection, setInternalActiveSection] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(defaultMobileMenuOpen);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const activeSection = controlledActiveSection ?? internalActiveSection;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleLinkClick = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    setInternalActiveSection(id);
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    }
  };

  const whatsappUrl = getWhatsAppUrl();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white md:bg-[#FCF3F5]/98 backdrop-blur-md shadow-sm border-b border-[#EF2A74]/10'
          : 'bg-white md:bg-transparent shadow-sm md:shadow-none border-b border-[#EF2A74]/10 md:border-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* A. Logotipo Oficial Amanda Sandole */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#home"
              onClick={(e) => handleLinkClick('home', e)}
              className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 rounded-md py-1"
              aria-label="Amanda Sandole Estética e Cursos Profissionais - Ir para o início"
            >
              <img
                src={logoImg}
                alt="Amanda Sandole - Estética Avançada & Cursos Profissionais"
                className="h-[46px] sm:h-[48px] md:h-[50px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                width={130}
                height={67}
                loading="eager"
                decoding="async"
              />
            </a>
          </div>

          {/* B. Menu de Navegação Desktop & Tablet */}
          <nav
            className="hidden md:flex items-center space-x-3 md:space-x-3.5 lg:space-x-7"
            role="navigation"
            aria-label="Navegação Principal"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <div key={item.id} className="relative py-2 flex flex-col items-center">
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(item.id, e)}
                    className={`text-[11.5px] lg:text-[13px] tracking-normal whitespace-nowrap transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink rounded-sm px-0.5 ${
                      isActive
                        ? 'text-brand-pink font-semibold'
                        : 'text-brand-slate hover:text-brand-pink font-medium'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>

                  {/* Indicador rosa horizontal abaixo do item ativo (fiel ao mockup) */}
                  {isActive ? (
                    <span
                      className="absolute -bottom-0.5 left-0 right-0 h-[2.5px] bg-brand-pink rounded-full transition-all duration-300"
                      aria-hidden="true"
                    />
                  ) : (
                    <span
                      className="absolute -bottom-0.5 left-1/2 right-1/2 h-[2.5px] bg-transparent rounded-full transition-all duration-300 group-hover:left-0 group-hover:right-0"
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* C. Botão de WhatsApp Oficial (Direita) */}
          <div className="hidden sm:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-1.5 lg:gap-2 h-[38px] px-3 lg:px-4 rounded-[10px] bg-brand-pink text-white font-semibold tracking-normal shadow-sm hover:bg-brand-pink-hover active:bg-brand-pink-active transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 hover:shadow hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Fale Conosco no WhatsApp (abre em uma nova aba)"
              title={
                WHATSAPP_PHONE_NUMBER
                  ? 'Fale Conosco no WhatsApp'
                  : 'Configuração pendente: clique para enviar mensagem prévia'
              }
            >
              <WhatsAppIcon className="w-4 h-4 text-white flex-shrink-0" />
              <span className="whitespace-nowrap font-medium text-[12.5px] hidden lg:inline">
                Fale Conosco no WhatsApp
              </span>
              <span className="whitespace-nowrap font-medium text-[12px] inline lg:hidden">
                WhatsApp
              </span>
              <ArrowRight
                className="w-3.5 h-3.5 text-white/95 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 stroke-[2.2]"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* D. Botão do Menu Mobile (Mobile & Tablet pequeno) */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex sm:hidden items-center justify-center p-2 rounded-lg bg-brand-pink text-white hover:bg-brand-pink-hover transition-colors shadow-sm"
              aria-label="Fale Conosco no WhatsApp"
              title="Fale Conosco no WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-brand-slate hover:text-brand-pink hover:bg-brand-pink-light/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Painel do Menu Mobile Responsivo */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out border-b border-brand-pink/10 bg-white overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 py-4 shadow-lg' : 'max-h-0 opacity-0 py-0'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="px-4 sm:px-6 space-y-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleLinkClick(item.id, e)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-brand-pink bg-brand-pink-light/60 font-semibold'
                    : 'text-brand-slate hover:text-brand-pink hover:bg-brand-pink-light/30'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" aria-hidden="true" />
                )}
              </a>
            );
          })}

          <div className="pt-3 border-t border-brand-pink/10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-brand-pink text-white text-sm font-semibold tracking-wide shadow-sm hover:bg-brand-pink-hover active:bg-brand-pink-active transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-white flex-shrink-0" />
              <span>Fale Conosco no WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-white/90 flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
