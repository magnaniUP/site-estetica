import React from 'react';
import { NAV_ITEMS } from '../../constants/navigation';
import { FOOTER_DATA } from '../../constants/footer';

import mottoFooterWhite from '../../assets/motto-footer-white.png';
import mottoFooterWhite2x from '../../assets/motto-footer-white@2x.png';
import mottoFooterWhite4x from '../../assets/motto-footer-white@4x.png';

/**
 * Ícone do Instagram em SVG fiel ao mockup oficial
 */
const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

/**
 * Ícone do Facebook em SVG fiel ao mockup oficial
 */
const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

/**
 * Ícone do YouTube em SVG fiel ao mockup oficial
 */
const YouTubeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer
      className="relative w-full bg-[#FCF3F5] text-brand-slate py-4 sm:py-5 lg:py-5.5 border-t border-[#EF2A74]/15 select-none transition-colors"
      role="contentinfo"
      aria-label="Rodapé do site Amanda Sandole"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 lg:px-4 xl:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2 xl:gap-6">
          
          {/* 1. Direitos Autorais (Esquerda no desktop) */}
          <div className="flex-shrink-0 text-center lg:text-left order-3 lg:order-1">
            <p className="text-[11px] sm:text-[11.5px] lg:text-[11px] xl:text-[12px] text-[#7A6B74] font-normal tracking-tight whitespace-nowrap">
              {FOOTER_DATA.copyrightText}
            </p>
          </div>

          {/* 2. Menu de Navegação Horizontal (Centro no desktop) */}
          <nav
            className="flex items-center flex-wrap lg:flex-nowrap justify-center gap-3 sm:gap-4 md:gap-4 lg:gap-2.5 xl:gap-5 order-1 lg:order-2"
            aria-label="Navegação do rodapé"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-[11px] sm:text-[12px] lg:text-[11px] xl:text-[12.5px] text-[#4B5E76] hover:text-brand-pink transition-colors duration-200 font-medium py-1 px-0.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-pink rounded whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* 3. Redes Sociais + Lema Manuscrito Branco (Direita no desktop) */}
          <div className="flex items-center justify-center lg:justify-end gap-3 sm:gap-3.5 lg:gap-2.5 xl:gap-5 order-2 lg:order-3 flex-shrink-0">
            {/* Ícones das redes sociais oficiais (Instagram, Facebook, YouTube) */}
            <div className="flex items-center gap-2 sm:gap-2.5" aria-label="Redes sociais oficiais">
              <a
                href={FOOTER_DATA.socialLinks[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4B5E76] hover:text-brand-pink transition-colors p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-pink rounded"
                aria-label={FOOTER_DATA.socialLinks[0].ariaLabel}
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={FOOTER_DATA.socialLinks[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4B5E76] hover:text-brand-pink transition-colors p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-pink rounded"
                aria-label={FOOTER_DATA.socialLinks[1].ariaLabel}
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href={FOOTER_DATA.socialLinks[2].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4B5E76] hover:text-brand-pink transition-colors p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-pink rounded"
                aria-label={FOOTER_DATA.socialLinks[2].ariaLabel}
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Lema manuscrito em branco com badge pílula elegante para contraste e destaque */}
            <div
              className="flex-shrink-0 flex items-center bg-brand-pink hover:bg-brand-pink-hover transition-colors px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-xs"
              aria-hidden="true"
            >
              <img
                src={mottoFooterWhite}
                srcSet={`${mottoFooterWhite} 1x, ${mottoFooterWhite2x} 2x, ${mottoFooterWhite4x} 4x`}
                alt={FOOTER_DATA.mottoText}
                width={138}
                height={25}
                className="w-[105px] sm:w-[115px] lg:w-[108px] xl:w-[130px] h-auto object-contain select-none pointer-events-none drop-shadow-xs"
                loading="eager"
                decoding="sync"
              />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
