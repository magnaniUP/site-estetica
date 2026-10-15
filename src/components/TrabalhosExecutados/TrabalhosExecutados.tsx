import React, { useState } from 'react';
import { ArrowRight, Maximize2, X } from 'lucide-react';
import { TRABALHOS_DATA, TrabalhoItem } from '../../constants/trabalhos';

type ViewMode = 'split' | 'antes' | 'depois';

export const TrabalhosExecutados: React.FC = () => {
  // Estado para controlar a visualização individual de cada card ('split', 'antes', 'depois')
  const [activeViews, setActiveViews] = useState<Record<string, ViewMode>>({
    'terapia-capilar': 'split',
    'jato-de-plasma': 'split',
    'toxina-botulinica': 'split',
  });

  // Estado para modal / lightbox de visualização em 100% alta resolução
  const [modalItem, setModalItem] = useState<TrabalhoItem | null>(null);

  const setView = (id: string, mode: ViewMode) => {
    setActiveViews((prev) => ({ ...prev, [id]: mode }));
  };

  return (
    <section
      id="trabalhos"
      aria-labelledby="trabalhos-heading"
      className="w-full bg-[#FAF5F6] py-14 sm:py-16 lg:py-20 border-b border-brand-pink/10 transition-colors relative overflow-hidden"
    >
      {/* Âncora semântica alternativa para compatibilidade com links de navegação */}
      <div id="trabalhos-executados" className="sr-only" aria-hidden="true" />

      {/* Sutil detalhe de iluminação ambiente decorativa */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Layout Desktop e Tablet em 2 Colunas fiéis ao Mockup */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-10 xl:gap-14">
          
          {/* Bloco de Texto à Esquerda */}
          <div className="w-full lg:w-[36%] xl:w-[35%] flex flex-col items-start text-left">
            {/* Tag da Seção */}
            <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.22em] text-brand-pink uppercase mb-2.5">
              {TRABALHOS_DATA.tag}
            </span>

            {/* Título Principal Focado nos Resultados Reais da Amanda */}
            <h2
              id="trabalhos-heading"
              className="font-serif text-[26px] sm:text-[30px] lg:text-[32px] xl:text-[34px] font-normal leading-[1.18] text-brand-slate-dark tracking-[-0.01em] mb-3"
            >
              Veja as transformações reais
              <br className="hidden sm:inline" /> realizadas por Amanda Sandole.
            </h2>

            {/* Subtítulo */}
            <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] text-[#59677A] font-normal leading-relaxed mb-6 sm:mb-7">
              {TRABALHOS_DATA.subtitle}
            </p>

            {/* Botão de Ação (CTA) Direto para Agendamento com Amanda em Rosa da Marca */}
            <a
              href={TRABALHOS_DATA.getCtaUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar procedimento no WhatsApp com Amanda Sandole"
              className="group inline-flex items-center justify-center gap-2.5 h-[42px] px-6 rounded-[8px] bg-brand-pink hover:bg-brand-pink-hover active:bg-brand-pink-active text-white text-[11px] sm:text-[11.5px] font-bold tracking-[0.08em] uppercase shadow-sm hover:shadow-md hover:shadow-brand-pink/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 w-full sm:w-auto"
            >
              <span>{TRABALHOS_DATA.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Grade de 3 Cards à Direita */}
          <div className="w-full lg:w-[64%] xl:w-[65%]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3.5 lg:gap-4 xl:gap-5">
              {TRABALHOS_DATA.items.map((item) => {
                const currentView = activeViews[item.id] || 'split';

                return (
                  <div
                    key={item.id}
                    className="flex flex-col text-left group bg-white/70 sm:bg-transparent p-2.5 sm:p-0 rounded-[18px] sm:rounded-none border sm:border-0 border-brand-pink/10 shadow-sm sm:shadow-none"
                  >
                    {/* Container da Imagem com proporção 129:84 e visualização 100% desobstruída (sem nenhum badge opaco cobrindo a foto) */}
                    <div
                      onClick={() => setModalItem(item)}
                      className="relative w-full aspect-[129/84] rounded-[14px] sm:rounded-[16px] overflow-hidden bg-brand-pink/5 shadow-[0_2px_10px_rgba(46,56,77,0.06)] border border-[#EBE3E5] group-hover:shadow-md group-hover:border-brand-pink/40 transition-all duration-300 cursor-pointer"
                      title={`Clique para ampliar o comparativo de ${item.title}`}
                    >
                      {/* 1. VISUALIZAÇÃO COMPARATIVA (SPLIT) */}
                      {currentView === 'split' && (
                        <picture>
                          <source
                            type="image/webp"
                            srcSet={`${item.imageWebp} 1x, ${item.imageWebp2x} 2x, ${item.imageWebp4x} 4x`}
                          />
                          <source
                            type="image/png"
                            srcSet={`${item.image} 1x, ${item.image2x} 2x, ${item.image4x} 4x`}
                          />
                          <img
                            src={item.image}
                            alt={item.altText}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                          />
                        </picture>
                      )}

                      {/* 2. VISUALIZAÇÃO 100% ANTES (SEM CORTES) */}
                      {currentView === 'antes' && (
                        <picture>
                          <source type="image/webp" srcSet={item.antesImageWebp} />
                          <source type="image/png" srcSet={item.antesImagePng} />
                          <img
                            src={item.antesImagePng}
                            alt={`${item.title} - Visualização completa do Antes`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover animate-fadeIn"
                          />
                        </picture>
                      )}

                      {/* 3. VISUALIZAÇÃO 100% DEPOIS (SEM CORTES) */}
                      {currentView === 'depois' && (
                        <picture>
                          <source type="image/webp" srcSet={item.depoisImageWebp} />
                          <source type="image/png" srcSet={item.depoisImagePng} />
                          <img
                            src={item.depoisImagePng}
                            alt={`${item.title} - Visualização completa do Depois`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover animate-fadeIn"
                          />
                        </picture>
                      )}

                      {/* Botão sutil de Ampliar no topo direito (aparece no hover para não poluir a foto) */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalItem(item);
                        }}
                        aria-label={`Ver fotos ampliadas em 100% de ${item.title}`}
                        className="absolute top-2 right-2 z-20 w-6 h-6 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm"
                        title="Ver fotos completas em alta resolução"
                      >
                        <Maximize2 className="w-3 h-3" />
                      </button>
                    </div>

                    {/* SELETOR INTERATIVO DE VISUALIZAÇÃO: PERMITE ALTERNAR E VER 100% DO ANTES E 100% DO DEPOIS */}
                    <div className="mt-2.5 flex items-center justify-between gap-1 bg-[#F5ECF0] p-0.5 rounded-full border border-brand-pink/10">
                      <button
                        type="button"
                        onClick={() => setView(item.id, 'antes')}
                        className={`flex-1 py-1 text-[10px] font-semibold rounded-full transition-all duration-150 ${
                          currentView === 'antes'
                            ? 'bg-brand-pink text-white shadow-xs'
                            : 'text-[#64748B] hover:text-[#2E384D]'
                        }`}
                      >
                        Antes
                      </button>
                      <button
                        type="button"
                        onClick={() => setView(item.id, 'split')}
                        className={`flex-1 py-1 text-[10px] font-semibold rounded-full transition-all duration-150 ${
                          currentView === 'split'
                            ? 'bg-brand-pink text-white shadow-xs'
                            : 'text-[#64748B] hover:text-[#2E384D]'
                        }`}
                      >
                        Comparar
                      </button>
                      <button
                        type="button"
                        onClick={() => setView(item.id, 'depois')}
                        className={`flex-1 py-1 text-[10px] font-semibold rounded-full transition-all duration-150 ${
                          currentView === 'depois'
                            ? 'bg-brand-pink text-white shadow-xs'
                            : 'text-[#64748B] hover:text-[#2E384D]'
                        }`}
                      >
                        Depois
                      </button>
                    </div>

                    {/* Título e Subtítulo fiéis à diagramação do Mockup */}
                    <h3 className="mt-2.5 px-0.5 text-[11px] sm:text-[11.5px] font-bold text-brand-slate-dark tracking-[0.06em] uppercase">
                      {item.title}
                    </h3>
                    {item.cardSubtitle && (
                      <p className="px-0.5 text-[11.5px] sm:text-[12px] text-[#718096] font-normal leading-snug mt-0.5">
                        {item.cardSubtitle}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* MODAL / LIGHTBOX DE VISUALIZAÇÃO EM 100% PARA INSPEÇÃO DETALHADA */}
      {modalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setModalItem(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-[20px] p-5 sm:p-7 shadow-2xl overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabeçalho do Modal */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-brand-pink uppercase">
                  Caso Clínico Amanda Sandole
                </span>
                <h3 className="font-serif text-[20px] sm:text-[24px] text-brand-slate-dark">
                  {modalItem.procedure}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalItem(null)}
                aria-label="Fechar visualização"
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Comparativo 100% lado a lado sem corte */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-5">
              {/* Foto 100% Antes */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] font-bold text-gray-700 uppercase tracking-wider">
                    Antes do Procedimento
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium">100% visível</span>
                </div>
                <div className="relative aspect-[4/3] rounded-[14px] overflow-hidden bg-gray-50 border border-gray-200">
                  <img
                    src={modalItem.antesImagePng}
                    alt={`${modalItem.title} - Foto completa do Antes`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Foto 100% Depois */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] font-bold text-brand-pink uppercase tracking-wider">
                    Depois do Procedimento
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium">100% visível</span>
                </div>
                <div className="relative aspect-[4/3] rounded-[14px] overflow-hidden bg-gray-50 border border-gray-200">
                  <img
                    src={modalItem.depoisImagePng}
                    alt={`${modalItem.title} - Foto completa do Depois`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Descrição e Botão de Agendamento */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
              <p className="text-[12.5px] text-gray-600 max-w-lg leading-relaxed">
                {modalItem.description}
              </p>
              <a
                href={TRABALHOS_DATA.getCtaUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[8px] bg-brand-pink hover:bg-brand-pink-hover active:bg-brand-pink-active text-white text-[12px] font-bold tracking-wide uppercase transition-all shadow-sm"
              >
                <span>Agendar Este Procedimento</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrabalhosExecutados;
