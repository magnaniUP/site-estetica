import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import {
  getWhatsAppUrl,
  WHATSAPP_ENROLL_MESSAGE,
  WHATSAPP_QUESTIONS_MESSAGE,
} from '../../constants/navigation';
import { WhatsAppIcon } from '../Header/Header';

import heroPanoramicWebp from '../../assets/hero-panoramic.webp';
import heroPanoramicJpg from '../../assets/hero-panoramic.jpg';
import heroSceneWebp from '../../assets/hero-scene.webp';
import heroSceneJpg from '../../assets/hero-scene.jpg';
import heroMobileUnifiedWebp from '../../assets/hero-mobile-unified.webp';
import heroMobileUnifiedJpg from '../../assets/hero-mobile-unified.jpg';
import phraseImg from '../../assets/phrase.png';
import phrase2x from '../../assets/phrase@2x.png';
import signatureImg from '../../assets/signature.png';
import signature2x from '../../assets/signature@2x.png';

export const Hero: React.FC = () => {
  const enrollUrl = getWhatsAppUrl(WHATSAPP_ENROLL_MESSAGE);
  const questionsUrl = getWhatsAppUrl(WHATSAPP_QUESTIONS_MESSAGE);

  return (
    <section
      id="home"
      aria-label="Apresentação dos Cursos de Estética Profissional"
      className="relative w-full overflow-hidden bg-[#FCF3F5] pt-24 sm:pt-28 md:pt-24 lg:pt-28 pb-12 md:pb-0 min-h-[560px] md:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex items-center"
    >
      {/* Background Panorâmico da Clínica com Amanda Sandole no Computador (Desktop: lg+) */}
      {/* Permite ver o fundo da clínica através de transparência suave atrás da headline e aproxima Amanda da headline */}
      <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
        <picture>
          <source srcSet={heroPanoramicWebp} type="image/webp" />
          <img
            src={heroPanoramicJpg}
            alt="Amanda Sandole em sua clínica de estética"
            aria-hidden="true"
            className="w-full h-full object-cover object-[57%_center]"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        {/* Camada sutil com transparência leve apenas atrás da headline, deixando os arcos visíveis e Amanda 100% nítida e viva */}
        <div className="absolute left-0 top-0 bottom-0 w-[44%] bg-gradient-to-r from-[#FCF3F5]/45 via-[#FCF3F5]/20 to-transparent pointer-events-none" />
        {/* Gradiente sutil na base */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#FCF3F5] to-transparent pointer-events-none" />
      </div>

      {/* Background no Tablet (md:block lg:hidden) — preserva exatamente o enquadramento aprovado para tablet */}
      <div className="hidden md:block lg:hidden absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none select-none overflow-hidden z-0">
        <picture>
          <source srcSet={heroSceneWebp} type="image/webp" />
          <img
            src={heroSceneJpg}
            alt="Amanda Sandole em sua clínica de estética"
            aria-hidden="true"
            className="w-full h-full object-cover object-[50%_center]"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-r from-[#FCF3F5] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#FCF3F5] to-transparent pointer-events-none" />
      </div>

      {/* Background Unificado no Mobile (< md): Imagem vertical contínua cobrindo todo o header e o hero */}
      <div className="md:hidden absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
        <picture>
          <source srcSet={heroMobileUnifiedWebp} type="image/webp" />
          <img
            src={heroMobileUnifiedJpg}
            alt="Amanda Sandole em sua clínica de estética"
            aria-hidden="true"
            className="w-full h-full object-cover object-[48%_top]"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        {/* Camada sutil de suavização superior para máxima legibilidade do título */}
        <div className="absolute inset-x-0 top-0 h-[380px] bg-gradient-to-b from-[#FCF3F5]/35 via-[#FCF3F5]/10 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FCF3F5] to-transparent pointer-events-none" />
      </div>

      <div className="max-w-[1160px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 lg:gap-6 items-center">
          {/* COLUNA ESQUERDA: Headline, Etiqueta, Texto de Apoio e Botões de Ação */}
          <div className="md:col-span-7 lg:col-span-6 xl:col-span-6 relative z-20 flex flex-col justify-center text-left py-4 sm:py-6 md:py-6 lg:py-12">
            {/* B. Etiqueta superior */}
            <div className="inline-flex items-center gap-2 mb-3.5 sm:mb-4">
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.16em] text-brand-pink uppercase">
                CURSOS DE ESTÉTICA PROFISSIONAL
              </span>
            </div>

            {/* C. Título principal — H1 Semântico com tipografia serifada editorial */}
            <h1 className="font-serif text-[30px] sm:text-[38px] md:text-[36px] lg:text-[44px] xl:text-[48px] font-bold text-brand-slate-dark leading-[1.14] tracking-tight">
              Aprenda as técnicas <br className="hidden sm:inline" />
              que transformam <br className="hidden sm:inline" />
              vidas e constroem <br />
              <span className="text-brand-pink italic font-normal tracking-normal inline-block mt-1">
                sua independência.
              </span>
            </h1>

            {/* D. Texto de apoio */}
            <p className="mt-4 sm:mt-5 text-[13.5px] sm:text-[14.5px] md:text-[14px] lg:text-[15.5px] leading-relaxed text-brand-slate max-w-[480px]">
              Cursos completos, com prática real e acompanhamento especializado, para você se tornar uma profissional de estética segura, atualizada e preparada para o mercado.
            </p>

            {/* E e F. Botões de Ação (CTAs WhatsApp) */}
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-stretch sm:items-stretch md:items-stretch lg:items-center gap-3 mt-6 sm:mt-7 md:mt-6 lg:mt-9 max-w-[380px] md:max-w-[340px] lg:max-w-none">
              {/* Botão Principal: Quero garantir minha vaga agora */}
              <a
                href={enrollUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 lg:gap-2.5 h-[46px] px-4 lg:px-4.5 xl:px-6 rounded-[10px] bg-brand-pink text-white text-[12px] sm:text-[12.5px] xl:text-[13px] font-semibold tracking-normal shadow-sm hover:bg-brand-pink-hover active:bg-brand-pink-active hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 flex-shrink-0"
                aria-label="Quero garantir minha vaga agora pelo WhatsApp (abre em nova aba)"
              >
                <WhatsAppIcon className="w-4 h-4 text-white flex-shrink-0" />
                <span className="whitespace-nowrap">Quero garantir minha vaga agora</span>
                <ArrowRight
                  className="w-3.5 h-3.5 text-white/95 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 stroke-[2.2]"
                  aria-hidden="true"
                />
              </a>

              {/* Botão Secundário: Tire suas dúvidas pelo WhatsApp */}
              <a
                href={questionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 lg:gap-2.5 h-[46px] px-3.5 lg:px-3.5 xl:px-4.5 rounded-[10px] bg-white hover:bg-[#FFF5F8] border border-brand-pink/35 hover:border-brand-pink text-brand-slate-dark text-[11px] sm:text-[11.5px] xl:text-[12px] font-medium tracking-normal shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 flex-shrink-0"
                aria-label="Tire suas dúvidas pelo WhatsApp (abre em nova aba)"
              >
                <Calendar className="w-4 h-4 text-brand-pink flex-shrink-0" aria-hidden="true" />
                <span className="text-left leading-tight whitespace-nowrap">
                  Tire suas dúvidas <br />
                  <span className="text-[10px] sm:text-[10.5px] text-brand-slate">pelo WhatsApp</span>
                </span>
              </a>
            </div>
          </div>

          {/* COLUNA DIREITA: Elementos Decorativos e Amanda no Mobile */}
          <div className="md:col-span-5 lg:col-span-6 xl:col-span-6 relative z-10 flex flex-col justify-between items-end h-full min-h-[380px] md:min-h-[440px] lg:min-h-[480px]">
            {/* Bloco Decorativo no Desktop: Frase Manuscrita + Assinatura Agrupadas Próximas */}
            <div className="hidden lg:flex absolute top-4 lg:top-6 right-0 lg:right-2 z-20 pointer-events-none select-none flex-col items-center gap-1.5 max-w-[155px]">
              <img
                src={phraseImg}
                srcSet={`${phraseImg} 1x, ${phrase2x} 2x`}
                alt="Seu futuro na estética começa aqui ♡"
                className="w-full max-w-[130px] lg:max-w-[145px] h-auto object-contain filter drop-shadow-sm"
                width={119}
                height={108}
                loading="eager"
              />
              <div className="flex flex-col items-center text-center mt-5 lg:mt-6">
                <img
                  src={signatureImg}
                  srcSet={`${signatureImg} 1x, ${signature2x} 2x`}
                  alt="Assinatura Amanda Sandole"
                  className="w-28 lg:w-32 h-auto object-contain filter drop-shadow-sm"
                  width={130}
                  height={35}
                  loading="eager"
                />
                <span className="text-[8.5px] lg:text-[9px] font-semibold tracking-[0.16em] text-[#4B5E76] uppercase mt-0.5 whitespace-nowrap">
                  ESTÉTICA AVANÇADA <br />
                  & CURSOS PROFISSIONAIS
                </span>
              </div>
            </div>

            {/* Assinatura no Tablet (md:flex lg:hidden) na base direita */}
            <div className="hidden md:flex lg:hidden absolute bottom-4 md:bottom-6 right-2 z-20 pointer-events-none select-none flex-col items-center text-center">
              <img
                src={signatureImg}
                srcSet={`${signatureImg} 1x, ${signature2x} 2x`}
                alt="Assinatura Amanda Sandole"
                className="w-24 md:w-28 h-auto object-contain filter drop-shadow-sm"
                width={130}
                height={35}
                loading="eager"
              />
              <span className="text-[8px] md:text-[8.5px] font-semibold tracking-[0.18em] text-[#4B5E76] uppercase mt-0.5 whitespace-nowrap">
                ESTÉTICA AVANÇADA <br />
                & CURSOS PROFISSIONAIS
              </span>
            </div>

            {/* Elementos Decorativos no Mobile (< md) sobre a cena de Amanda perfeitamente integrada no fundo */}
            <div className="md:hidden relative z-10 w-full h-[360px] sm:h-[400px] pointer-events-none select-none">
              {/* Frase Manuscrita no Mobile */}
              <div className="absolute top-2 right-1 sm:right-4 z-20 pointer-events-none select-none max-w-[115px]">
                <img
                  src={phraseImg}
                  srcSet={`${phraseImg} 1x, ${phrase2x} 2x`}
                  alt="Seu futuro na estética começa aqui ♡"
                  className="w-full h-auto object-contain filter drop-shadow-sm"
                  width={119}
                  height={108}
                  loading="eager"
                />
              </div>

              {/* Assinatura no Mobile */}
              <div className="absolute bottom-4 right-1 sm:right-4 z-20 pointer-events-none select-none flex flex-col items-center text-center">
                <img
                  src={signatureImg}
                  srcSet={`${signatureImg} 1x, ${signature2x} 2x`}
                  alt="Assinatura Amanda Sandole"
                  className="w-24 sm:w-26 h-auto object-contain filter drop-shadow-sm"
                  width={130}
                  height={35}
                  loading="eager"
                />
                <span className="text-[7.5px] sm:text-[8px] font-semibold tracking-[0.16em] text-[#4B5E76] uppercase mt-0.5 whitespace-nowrap">
                  ESTÉTICA AVANÇADA <br />
                  & CURSOS PROFISSIONAIS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
