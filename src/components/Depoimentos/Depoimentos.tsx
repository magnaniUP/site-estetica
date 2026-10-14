import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import {
  TESTIMONIALS_TAG,
  TESTIMONIALS_TITLE,
  TESTIMONIALS_SUBTITLE,
  TESTIMONIALS_DATA,
  getMoreTestimonialsWhatsAppUrl,
  TestimonialItem,
} from '../../constants/depoimentos';

export const Depoimentos: React.FC = () => {
  const moreUrl = getMoreTestimonialsWhatsAppUrl();

  return (
    <section
      id="depoimentos"
      aria-labelledby="depoimentos-heading"
      className="w-full bg-white py-12 sm:py-14 lg:py-16 border-b border-brand-pink/10 transition-colors relative"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DA SEÇÃO: TÍTULO À ESQUERDA E 'VER MAIS DEPOIMENTOS' À DIREITA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 text-left">
          <div>
            {/* Etiqueta superior */}
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.16em] text-brand-pink uppercase">
                {TESTIMONIALS_TAG}
              </span>
            </div>

            {/* Título Principal Semântico H2 */}
            <h2
              id="depoimentos-heading"
              className="font-serif text-[26px] sm:text-[30px] lg:text-[32px] font-bold text-brand-slate-dark leading-tight tracking-tight"
            >
              {TESTIMONIALS_TITLE}
            </h2>

            {/* Texto introdutório para SEO e leitor de tela */}
            <p className="sr-only sm:not-sr-only text-[12px] sm:text-[12.5px] text-brand-slate mt-1 max-w-[500px]">
              {TESTIMONIALS_SUBTITLE}
            </p>
          </div>

          {/* Link para ver mais depoimentos */}
          <div className="flex-shrink-0">
            <a
              href={moreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[12px] sm:text-[12.5px] font-semibold text-brand-pink hover:text-brand-pink-hover active:text-brand-pink-active transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink rounded-md"
              aria-label="Ver mais depoimentos de alunas pelo WhatsApp (abre em nova aba)"
            >
              <span>Ver mais depoimentos</span>
              <ArrowRight
                className="w-3.5 h-3.5 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* GRADE DOS TRÊS CARDS DE DEPOIMENTOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {TESTIMONIALS_DATA.map((item: TestimonialItem) => (
            <article
              key={item.id}
              className="bg-white rounded-[16px] p-5 sm:p-5 lg:p-5.5 border border-brand-pink/15 shadow-[0_2px_12px_rgba(239,42,116,0.04)] hover:shadow-md hover:border-brand-pink/30 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between text-left group"
            >
              {/* Topo do Card: Avatar à esquerda + Aspas e Texto do Depoimento à direita */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                {/* Avatar da Aluna */}
                <div className="w-[58px] h-[58px] sm:w-[64px] sm:h-[64px] rounded-full overflow-hidden flex-shrink-0 bg-[#FDF4F7] border border-brand-pink/15 shadow-sm">
                  <picture>
                    <source srcSet={item.avatarWebp} type="image/webp" />
                    <img
                      src={item.avatarPng}
                      alt={`Foto da aluna ${item.name}`}
                      width={140}
                      height={140}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </div>

                {/* Bloco de Aspas + Depoimento */}
                <div className="flex-1">
                  <p className="text-[11.5px] sm:text-[12px] leading-relaxed text-brand-slate relative pl-4">
                    <span
                      className="absolute left-0 top-[-2px] text-[18px] font-serif font-bold text-brand-pink select-none leading-none"
                      aria-hidden="true"
                    >
                      “
                    </span>
                    {item.quote}
                  </p>
                </div>
              </div>

              {/* Rodapé do Card: Nome da Aluna à esquerda + 5 Estrelas à direita */}
              <div className="flex items-center justify-between pt-3.5 mt-3.5 border-t border-brand-pink/10">
                <span className="text-[12px] sm:text-[12.5px] font-bold text-brand-slate-dark">
                  {item.name}
                </span>

                {/* 5 Estrelas em Rosa Intenso */}
                <div
                  className="flex items-center gap-0.5 text-brand-pink"
                  aria-label={`Avaliação de ${item.rating} de 5 estrelas`}
                >
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-3.5 h-3.5 fill-current text-brand-pink stroke-none"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

