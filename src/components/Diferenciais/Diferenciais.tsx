import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '../Header/Header';
import {
  DIFFERENTIALS,
  getDiferenciaisWhatsAppUrl,
  DifferentialItem,
} from '../../constants/diferenciais';
import { getDifferentialIcon } from './DifferentialIcons';

import clinicRoomWebp from '../../assets/clinic-room.webp';
import clinicRoomJpg from '../../assets/clinic-room.jpg';
import phraseDiferenciais2x from '../../assets/phrase-diferenciais@2x.png';

export const Diferenciais: React.FC = () => {
  const ctaUrl = getDiferenciaisWhatsAppUrl();

  // Organizar os 6 diferenciais em 3 colunas de 2 itens
  const col1 = [DIFFERENTIALS[0], DIFFERENTIALS[3]]; // Conteúdo atualizado / Suporte contínuo 1
  const col2 = [DIFFERENTIALS[1], DIFFERENTIALS[4]]; // Professores especializados / Suporte pós-curso
  const col3 = [DIFFERENTIALS[2], DIFFERENTIALS[5]]; // Aulas 100% práticas / Ambiente moderno

  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-heading"
      className="w-full bg-[#FAF5F6] py-14 sm:py-16 lg:py-0 border-b border-brand-pink/10 transition-colors relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch justify-between">
          
          {/* ÁREA ESQUERDA + CENTRAL (CONTAINER COM PADDING) */}
          <div className="w-full lg:w-[58%] xl:w-[56%] flex flex-col md:flex-row items-start justify-between gap-8 sm:gap-10 lg:gap-6 xl:gap-8 px-4 sm:px-6 lg:pl-8 xl:pl-12 lg:pr-4 py-0 lg:py-16 xl:py-20">
            
            {/* 1. BLOCO DE APRESENTAÇÃO */}
            <div className="w-full md:w-[260px] lg:w-[240px] xl:w-[270px] flex-shrink-0 flex flex-col justify-start text-left">
              {/* Etiqueta superior */}
              <div className="inline-flex items-center gap-2 mb-2 sm:mb-2.5">
                <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.16em] text-brand-pink uppercase">
                  POR QUE ESCOLHER A AMANDASANDOLE?
                </span>
              </div>

              {/* Título Principal (H2 Semântico) */}
              <h2
                id="diferenciais-heading"
                className="font-serif text-[28px] sm:text-[32px] lg:text-[30px] xl:text-[34px] font-bold text-brand-slate-dark leading-[1.15] tracking-tight"
              >
                Mais do que cursos, <br />
                é uma{' '}
                <span className="text-brand-pink italic font-normal tracking-normal inline-block">
                  transformação.
                </span>
              </h2>

              {/* Texto de Apoio */}
              <p className="mt-3.5 sm:mt-4 text-[12.5px] sm:text-[13px] leading-relaxed text-brand-slate max-w-[320px]">
                Aqui você aprende com quem é referência no mercado da estética, com foco na prática, na sua evolução e no seu sucesso profissional.
              </p>

              {/* Botão de Ação: Garantir minha vaga */}
              <div className="mt-5 sm:mt-7">
                <a
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 lg:gap-2.5 h-[42px] px-5 sm:px-6 rounded-[8px] bg-brand-pink text-white text-[12px] sm:text-[12.5px] font-semibold tracking-normal shadow-sm hover:bg-brand-pink-hover active:bg-brand-pink-active hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 w-full sm:w-auto"
                  aria-label="Garantir minha vaga nos cursos de estética da Amanda Sandole pelo WhatsApp (abre em nova aba)"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="whitespace-nowrap">Garantir minha vaga</span>
                  <ArrowRight
                    className="w-3.5 h-3.5 text-white/95 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 stroke-[2.2]"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            {/* 2. GRADE CENTRAL DOS SEIS BENEFÍCIOS */}
            <div className="w-full md:flex-1">
              {/* Desktop / Tablet (3 Colunas com linhas divisórias contínuas) */}
              <div className="hidden sm:grid grid-cols-3 gap-0 h-full">
                {[col1, col2, col3].map((column, colIdx) => (
                  <div
                    key={`col-${colIdx}`}
                    className="border-l border-brand-pink/20 pl-3.5 sm:pl-4 xl:pl-5 pr-2 flex flex-col justify-between space-y-6 sm:space-y-7 text-left"
                  >
                    {column.map((item: DifferentialItem) => (
                      <div key={item.id} className="flex flex-col items-start group">
                        {/* Ícone circular com fundo rosa suave */}
                        <div className="w-10 h-10 xl:w-11 xl:h-11 rounded-full bg-[#FDE7EE] flex items-center justify-center mb-2.5 transition-transform duration-200 group-hover:scale-105 shadow-[0_1px_3px_rgba(239,42,116,0.06)]">
                          {getDifferentialIcon(item.id, 'w-4.5 h-4.5 xl:w-5 xl:h-5 text-brand-pink')}
                        </div>

                        {/* Título com quebra fiel */}
                        <h3 className="text-[11.5px] xl:text-[12px] font-bold text-brand-slate-dark leading-snug">
                          {item.titleBreak ? (
                            <>
                              {item.titleBreak[0]} <br />
                              {item.titleBreak[1]}
                            </>
                          ) : (
                            item.title
                          )}
                        </h3>

                        {/* Descrição curta */}
                        <p className="mt-1 text-[10.5px] xl:text-[11px] text-brand-slate leading-relaxed">
                          {item.descriptionBreak ? (
                            <>
                              {item.descriptionBreak[0]} <br />
                              {item.descriptionBreak[1]}
                            </>
                          ) : (
                            item.description
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Mobile (2 Colunas com divisores verticais sutis) */}
              <div className="grid sm:hidden grid-cols-2 gap-y-6 gap-x-3 text-left">
                {DIFFERENTIALS.map((item: DifferentialItem, index: number) => (
                  <div
                    key={item.id}
                    className={`flex flex-col items-start pl-2.5 ${
                      index % 2 === 1 ? 'border-l border-brand-pink/20' : ''
                    }`}
                  >
                    <div className="w-9 h-9 rounded-full bg-[#FDE7EE] flex items-center justify-center mb-2 shadow-sm">
                      {getDifferentialIcon(item.id, 'w-4 h-4 text-brand-pink')}
                    </div>
                    <h3 className="text-[11.5px] font-bold text-brand-slate-dark leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[10.5px] text-brand-slate leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* 3. FOTOGRAFIA DO AMBIENTE + ELEMENTOS MANUSCRITOS (INTEGRAÇÃO TOTAL À DIREITA) */}
          <div className="w-full lg:w-[42%] xl:w-[44%] relative min-h-[300px] sm:min-h-[360px] lg:min-h-[440px] flex items-center mt-6 lg:mt-0">
            {/* Foto com transição horizontal suave no Desktop */}
            <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] lg:min-h-[440px] overflow-hidden lg:rounded-none rounded-[16px] mx-4 sm:mx-6 lg:mx-0">
              <picture>
                <source srcSet={clinicRoomWebp} type="image/webp" />
                <img
                  src={clinicRoomJpg}
                  alt="Sala de atendimento estético profissional com maca confortável, detalhes em rosa e iluminação acolhedora da clínica Amanda Sandole"
                  width={1280}
                  height={720}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-center lg:object-left"
                />
              </picture>

              {/* Degradê horizontal suave de fusão com a cor de fundo (Desktop) */}
              <div
                className="hidden lg:block absolute inset-y-0 left-0 w-24 xl:w-36 bg-gradient-to-r from-[#FAF5F6] via-[#FAF5F6]/70 to-transparent pointer-events-none z-10"
                aria-hidden="true"
              />
            </div>

            {/* Frase manuscrita e coração decorativo flutuante */}
            <div
              className="absolute top-4 right-8 sm:top-6 sm:right-12 lg:top-8 lg:right-10 xl:top-10 xl:right-14 pointer-events-none select-none z-20 -rotate-[8deg]"
              aria-hidden="true"
            >
              <img
                src={phraseDiferenciais2x}
                alt="Mais que cursos, uma nova fase! ♡"
                width={105}
                height={113}
                className="w-[90px] sm:w-[110px] lg:w-[125px] xl:w-[140px] h-auto drop-shadow-[0_2px_4px_rgba(239,42,116,0.18)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

