import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CONTATOS_DATA, getContatosWhatsAppUrl } from '../../constants/contatos';
import { WHATSAPP_PHONE_NUMBER } from '../../constants/navigation';

import logoContatos from '../../assets/logo-contatos.png';
import logoContatos2x from '../../assets/logo-contatos@2x.png';

import phraseContatos from '../../assets/phrase-contatos.png';
import phraseContatos2x from '../../assets/phrase-contatos@2x.png';
import phraseContatos4x from '../../assets/phrase-contatos@4x.png';

/**
 * Ícone oficial do WhatsApp em vetor SVG de alta precisão
 */
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const Contatos: React.FC = () => {
  const whatsappUrl = getContatosWhatsAppUrl();

  return (
    <section
      id="contatos"
      aria-labelledby="contatos-banner-heading"
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#BA3E6E] via-[#C84977] to-[#D04A7B] text-white py-4 sm:py-5 lg:py-6 shadow-md transition-colors"
    >
      {/* Título oculto para leitores de tela e SEO técnico */}
      <h2 id="contatos-banner-heading" className="sr-only">
        {CONTATOS_DATA.headlinePhrase}
      </h2>

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5 md:gap-4 lg:gap-8">
          
          {/* 1. Logotipo Oficial Amanda Sandole (Esquerda) */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start">
            <a
              href="#home"
              className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#BA3E6E] rounded-md transition-transform duration-200 hover:scale-[1.02]"
              aria-label="Amanda Sandole - Ir para o início da página"
            >
              <img
                src={logoContatos}
                srcSet={`${logoContatos} 1x, ${logoContatos2x} 2x`}
                alt={CONTATOS_DATA.logoAlt}
                width={202}
                height={43}
                className="h-[36px] sm:h-[40px] md:h-[42px] lg:h-[44px] w-auto object-contain filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
                loading="eager"
                decoding="sync"
              />
            </a>
          </div>

          {/* 2. Frase Manuscrita Tilted (Centro) */}
          <div
            className="flex-shrink-0 flex items-center justify-center -rotate-[5deg] md:-rotate-[6deg] transform transition-transform duration-300 hover:-rotate-[4deg]"
            aria-hidden="true"
          >
            <img
              src={phraseContatos}
              srcSet={`${phraseContatos} 1x, ${phraseContatos2x} 2x, ${phraseContatos4x} 4x`}
              alt={CONTATOS_DATA.headlinePhrase}
              width={171}
              height={54}
              className="w-[155px] sm:w-[175px] md:w-[185px] lg:w-[205px] h-auto object-contain select-none pointer-events-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
              loading="eager"
              decoding="sync"
            />
          </div>

          {/* 3. CTA WhatsApp + Subtexto (Direita) */}
          <div className="flex-shrink-0 flex flex-col items-center md:items-end gap-1 sm:gap-1.5 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 sm:gap-2.5 w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-2.5 h-[42px] sm:h-[44px] rounded-[10px] bg-[#049D43] hover:bg-[#038538] active:bg-[#026B2D] text-white font-medium text-[13px] sm:text-[13.5px] border-[1.5px] border-white shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#BA3E6E]"
              aria-label={`${CONTATOS_DATA.buttonText} (abre em nova aba)`}
              title={
                WHATSAPP_PHONE_NUMBER
                  ? `${CONTATOS_DATA.buttonText}`
                  : 'Falar com Amanda Sandole no WhatsApp'
              }
            >
              <WhatsAppIcon className="w-4 sm:w-4.5 h-4 sm:h-4.5 text-white flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
              <span className="whitespace-nowrap tracking-tight font-medium">
                {CONTATOS_DATA.buttonText}
              </span>
              <ArrowRight
                className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white flex-shrink-0 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            {/* Subtexto sutil exatamente como no mockup */}
            <p className="text-[10px] sm:text-[10.5px] md:text-[11px] text-white/95 font-light tracking-tight text-center md:text-right whitespace-normal sm:whitespace-nowrap select-none">
              {CONTATOS_DATA.subtext}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
