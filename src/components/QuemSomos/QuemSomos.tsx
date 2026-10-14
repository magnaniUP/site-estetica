import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '../Header/Header';
import {
  QUEM_SOMOS_TITLE_LINE1,
  QUEM_SOMOS_TITLE_LINE2,
  QUEM_SOMOS_BIO,
  QUEM_SOMOS_HIGHLIGHTS,
  QUEM_SOMOS_INDICATORS,
  getQuemSomosWhatsAppUrl,
  QuemSomosIndicator,
} from '../../constants/quemSomos';
import {
  CheckCircleBadgeIcon,
  getIndicatorIcon,
} from './QuemSomosIcons';

import amandaQuemSomosWebp from '../../assets/amanda-quem-somos.webp';
import amandaQuemSomosJpg from '../../assets/amanda-quem-somos.jpg';

export const QuemSomos: React.FC = () => {
  const ctaUrl = getQuemSomosWhatsAppUrl();

  return (
    <section
      id="quem-somos"
      aria-labelledby="quem-somos-heading"
      className="w-full bg-[#FAF5F7] py-14 sm:py-16 lg:py-20 border-b border-brand-pink/10 transition-colors relative"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* DESKTOP (lg+): 3 COLUNAS - FOTO | TEXTO + BOTÃO | PAINEL DE INDICADORES */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* 1. FOTOGRAFIA EDITORIAL À ESQUERDA */}
          <div className="lg:col-span-4 xl:col-span-3.5 flex justify-center">
            <div className="relative w-full max-w-[290px] xl:max-w-[310px] aspect-[4/5] rounded-[18px] overflow-hidden shadow-[0_8px_24px_rgba(239,42,116,0.08)] border border-brand-pink/10 bg-white group">
              <picture>
                <source srcSet={amandaQuemSomosWebp} type="image/webp" />
                <img
                  src={amandaQuemSomosJpg}
                  alt="Amanda Sandole, esteticista e especialista em cursos de estética profissional"
                  width={768}
                  height={960}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </picture>
            </div>
          </div>

          {/* 2. BLOCO DE TEXTO DE APRESENTAÇÃO NO CENTRO */}
          <div className="lg:col-span-5 xl:col-span-5.5 flex flex-col justify-center text-left">
            {/* Etiqueta Superior */}
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-2.5">
              <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.16em] text-brand-pink uppercase">
                QUEM SOMOS
              </span>
            </div>

            {/* Título Principal Semântico H2 */}
            <h2
              id="quem-somos-heading"
              className="font-serif text-[28px] sm:text-[32px] xl:text-[35px] font-bold text-brand-slate-dark leading-[1.14] tracking-tight"
            >
              {QUEM_SOMOS_TITLE_LINE1} <br />
              {QUEM_SOMOS_TITLE_LINE2.replace('.', '')}
              <span className="text-brand-pink font-serif">.</span>
            </h2>

            {/* Texto Editorial de Apresentação */}
            <p className="mt-3.5 sm:mt-4 text-[12.5px] sm:text-[13px] leading-relaxed text-brand-slate max-w-[460px]">
              {QUEM_SOMOS_BIO}
            </p>

            {/* Linha com 3 Destaques e Botão CTA Alinhado ao Lado */}
            <div className="mt-6 sm:mt-7 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-5 xl:gap-4">
              
              {/* Três destaques com ícone circular rosa */}
              <ul className="space-y-2 sm:space-y-2.5" aria-label="Diferenciais da instrutora">
                {QUEM_SOMOS_HIGHLIGHTS.map((highlight) => (
                  <li key={highlight.id} className="flex items-center gap-2.5 text-left">
                    <CheckCircleBadgeIcon className="w-4 h-4 text-brand-pink flex-shrink-0" />
                    <span className="text-[12px] sm:text-[12.5px] font-medium text-brand-slate-dark/90">
                      {highlight.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Botão de Ação: Quero garantir minha vaga */}
              <div className="flex-shrink-0">
                <a
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 lg:gap-2.5 h-[42px] px-5 sm:px-6 rounded-[8px] bg-brand-pink text-white text-[12px] sm:text-[12.5px] font-semibold tracking-normal shadow-sm hover:bg-brand-pink-hover active:bg-brand-pink-active hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2"
                  aria-label="Quero garantir minha vaga nos cursos da Amanda Sandole pelo WhatsApp (abre em nova aba)"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="whitespace-nowrap">Quero garantir minha vaga</span>
                  <ArrowRight
                    className="w-3.5 h-3.5 text-white/95 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 stroke-[2.2]"
                    aria-hidden="true"
                  />
                </a>
              </div>

            </div>
          </div>

          {/* 3. PAINEL DE INDICADORES À DIREITA */}
          <div className="lg:col-span-3 xl:col-span-3 flex justify-end">
            <div className="w-full max-w-[270px] bg-[#FAF0F4] rounded-[18px] p-5 xl:p-6 border border-brand-pink/15 shadow-[0_4px_16px_rgba(239,42,116,0.04)] text-left">
              <div className="flex flex-col space-y-4 xl:space-y-5">
                {QUEM_SOMOS_INDICATORS.map((indicator: QuemSomosIndicator) => (
                  <div key={indicator.id} className="flex items-center gap-3.5 group">
                    {/* Medalha circular rosa claro */}
                    <div className="w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-[#FCE6EE] flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-[0_1px_3px_rgba(239,42,116,0.06)]">
                      {getIndicatorIcon(indicator.icon, 'w-5 h-5 text-brand-pink')}
                    </div>

                    {/* Textos: Valor + Descrição */}
                    <div className="flex flex-col">
                      <span className="text-[17px] xl:text-[19px] font-bold text-brand-pink leading-tight tracking-tight">
                        {indicator.value}
                      </span>
                      <span className="text-[11px] xl:text-[11.5px] font-medium text-brand-slate leading-tight mt-0.5">
                        {indicator.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* TABLET (md: 768px - 1023px): FOTO + TEXTO EM LINHA / INDICADORES EM GRADE ABAIXO */}
        <div className="hidden md:flex lg:hidden flex-col gap-8">
          <div className="flex flex-row items-center gap-6 xl:gap-8">
            {/* Foto Tablet */}
            <div className="w-[240px] flex-shrink-0">
              <div className="relative w-full aspect-[4/5] rounded-[16px] overflow-hidden shadow-[0_4px_16px_rgba(239,42,116,0.08)] border border-brand-pink/10 bg-white">
                <picture>
                  <source srcSet={amandaQuemSomosWebp} type="image/webp" />
                  <img
                    src={amandaQuemSomosJpg}
                    alt="Amanda Sandole, esteticista e especialista em cursos de estética profissional"
                    width={768}
                    height={960}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </picture>
              </div>
            </div>

            {/* Texto Tablet */}
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold tracking-[0.16em] text-brand-pink uppercase">
                  QUEM SOMOS
                </span>
              </div>

              <h2 className="font-serif text-[28px] sm:text-[30px] font-bold text-brand-slate-dark leading-[1.16] tracking-tight">
                {QUEM_SOMOS_TITLE_LINE1} <br />
                {QUEM_SOMOS_TITLE_LINE2.replace('.', '')}
                <span className="text-brand-pink font-serif">.</span>
              </h2>

              <p className="mt-3 text-[12.5px] leading-relaxed text-brand-slate">
                {QUEM_SOMOS_BIO}
              </p>

              <ul className="mt-4 space-y-2" aria-label="Diferenciais da instrutora">
                {QUEM_SOMOS_HIGHLIGHTS.map((highlight) => (
                  <li key={highlight.id} className="flex items-center gap-2.5 text-left">
                    <CheckCircleBadgeIcon className="w-4 h-4 text-brand-pink flex-shrink-0" />
                    <span className="text-[12px] font-medium text-brand-slate-dark/90">
                      {highlight.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <a
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 h-[42px] px-5 rounded-[8px] bg-brand-pink text-white text-[12px] font-semibold shadow-sm hover:bg-brand-pink-hover active:bg-brand-pink-active transition-all"
                  aria-label="Quero garantir minha vaga nos cursos da Amanda Sandole pelo WhatsApp (abre em nova aba)"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white flex-shrink-0" />
                  <span>Quero garantir minha vaga</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/95 flex-shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Painel de Indicadores no Tablet (4 colunas horizontais) */}
          <div className="w-full bg-[#FAF0F4] rounded-[16px] p-5 border border-brand-pink/15 shadow-[0_2px_12px_rgba(239,42,116,0.04)]">
            <div className="grid grid-cols-4 gap-4">
              {QUEM_SOMOS_INDICATORS.map((indicator: QuemSomosIndicator) => (
                <div key={indicator.id} className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-full bg-[#FCE6EE] flex items-center justify-center flex-shrink-0 shadow-sm">
                    {getIndicatorIcon(indicator.icon, 'w-4.5 h-4.5 text-brand-pink')}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[16px] font-bold text-brand-pink leading-tight">
                      {indicator.value}
                    </span>
                    <span className="text-[11px] font-medium text-brand-slate leading-tight mt-0.5">
                      {indicator.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE (< 768px): COLUNA VERTICAL COM FOTO, TEXTO E INDICADORES EM GRADE 2x2 */}
        <div className="flex md:hidden flex-col items-center text-left space-y-6">
          
          {/* Cabeçalho de texto superior */}
          <div className="w-full">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-[10.5px] font-bold tracking-[0.16em] text-brand-pink uppercase">
                QUEM SOMOS
              </span>
            </div>

            <h2 className="font-serif text-[26px] font-bold text-brand-slate-dark leading-[1.16] tracking-tight">
              {QUEM_SOMOS_TITLE_LINE1} <br />
              {QUEM_SOMOS_TITLE_LINE2.replace('.', '')}
              <span className="text-brand-pink font-serif">.</span>
            </h2>
          </div>

          {/* Foto Amanda no Mobile */}
          <div className="w-full max-w-[280px]">
            <div className="relative w-full aspect-[4/5] rounded-[16px] overflow-hidden shadow-[0_4px_16px_rgba(239,42,116,0.08)] border border-brand-pink/10 bg-white">
              <picture>
                <source srcSet={amandaQuemSomosWebp} type="image/webp" />
                <img
                  src={amandaQuemSomosJpg}
                  alt="Amanda Sandole, esteticista e especialista em cursos de estética profissional"
                  width={768}
                  height={960}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </picture>
            </div>
          </div>

          {/* Bio + Destaques + Botão */}
          <div className="w-full">
            <p className="text-[12.5px] leading-relaxed text-brand-slate">
              {QUEM_SOMOS_BIO}
            </p>

            <ul className="mt-4 space-y-2.5" aria-label="Diferenciais da instrutora">
              {QUEM_SOMOS_HIGHLIGHTS.map((highlight) => (
                <li key={highlight.id} className="flex items-center gap-2.5 text-left">
                  <CheckCircleBadgeIcon className="w-4 h-4 text-brand-pink flex-shrink-0" />
                  <span className="text-[12px] font-medium text-brand-slate-dark/90">
                    {highlight.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 h-[42px] px-6 rounded-[8px] bg-brand-pink text-white text-[12px] font-semibold shadow-sm hover:bg-brand-pink-hover active:bg-brand-pink-active transition-all w-full"
                aria-label="Quero garantir minha vaga nos cursos da Amanda Sandole pelo WhatsApp (abre em nova aba)"
              >
                <WhatsAppIcon className="w-4 h-4 text-white flex-shrink-0" />
                <span>Quero garantir minha vaga</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/95 flex-shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Painel de Indicadores no Mobile (Grade 2x2 compacta) */}
          <div className="w-full bg-[#FAF0F4] rounded-[16px] p-4.5 border border-brand-pink/15 shadow-sm">
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-left">
              {QUEM_SOMOS_INDICATORS.map((indicator: QuemSomosIndicator) => (
                <div key={indicator.id} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#FCE6EE] flex items-center justify-center flex-shrink-0 shadow-sm">
                    {getIndicatorIcon(indicator.icon, 'w-4 h-4 text-brand-pink')}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-bold text-brand-pink leading-tight">
                      {indicator.value}
                    </span>
                    <span className="text-[10px] font-medium text-brand-slate leading-tight mt-0.5">
                      {indicator.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
