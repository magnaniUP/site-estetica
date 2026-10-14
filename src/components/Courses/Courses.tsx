import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '../Header/Header';
import {
  COURSES,
  COURSES_SECTION_WHATSAPP_MESSAGE,
  getCourseWhatsAppUrl,
  Course,
} from '../../constants/courses';
import { getWhatsAppUrl } from '../../constants/navigation';
import { getCourseIcon } from './CourseIcons';

export const Courses: React.FC = () => {
  const mainCtaUrl = getWhatsAppUrl(COURSES_SECTION_WHATSAPP_MESSAGE);

  return (
    <section
      id="cursos"
      aria-labelledby="cursos-heading"
      className="w-full bg-[#FAF5F6]/70 py-16 sm:py-20 lg:py-24 border-b border-brand-pink/10 transition-colors"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-8 xl:gap-10">
          {/* COLUNA ESQUERDA: Apresentação da Formação e CTA Principal */}
          <div className="w-full lg:w-[260px] xl:w-[320px] flex-shrink-0 flex flex-col justify-start text-left">
            {/* Etiqueta superior */}
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-2.5">
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.16em] text-brand-pink uppercase">
                NOSSOS CURSOS
              </span>
            </div>

            {/* Título Principal (H2 Semântico) */}
            <h2
              id="cursos-heading"
              className="font-serif text-[30px] sm:text-[34px] lg:text-[34px] xl:text-[40px] font-bold text-brand-slate-dark leading-[1.14] tracking-tight"
            >
              Formação completa, <br />
              do básico{' '}
              <span className="text-brand-pink italic font-normal tracking-normal inline-block">
                ao avançado.
              </span>
            </h2>

            {/* Texto de Apoio */}
            <p className="mt-4 sm:mt-5 text-[13.5px] sm:text-[14.5px] leading-relaxed text-brand-slate max-w-[360px]">
              Aulas práticas, conteúdo atualizado e suporte para você aprender com quem é referência no mercado da estética.
            </p>

            {/* Botão de Ação: Quero saber mais sobre os cursos */}
            <div className="mt-6 sm:mt-8">
              <a
                href={mainCtaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 lg:gap-2.5 h-[46px] px-5 sm:px-6 rounded-[10px] bg-brand-pink text-white text-[12px] sm:text-[12.5px] font-semibold tracking-normal shadow-sm hover:bg-brand-pink-hover active:bg-brand-pink-active hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 w-full sm:w-auto"
                aria-label="Quero saber mais sobre os cursos de estética pelo WhatsApp (abre em nova aba)"
              >
                <WhatsAppIcon className="w-4 h-4 text-white flex-shrink-0" />
                <span className="whitespace-nowrap">Quero saber mais sobre os cursos</span>
                <ArrowRight
                  className="w-3.5 h-3.5 text-white/95 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 stroke-[2.2]"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* COLUNA DIREITA: Grade dos Dez Cursos (5 colunas x 2 linhas) */}
          <div className="w-full flex-1">
            <div
              className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 gap-2.5 sm:gap-2 md:gap-2.5 lg:gap-2 xl:gap-3"
              role="list"
              aria-label="Lista de Cursos de Estética Profissional"
            >
              {COURSES.map((course: Course) => {
                const courseUrl = getCourseWhatsAppUrl(course);
                return (
                  <article
                    key={course.id}
                    role="listitem"
                    className="group relative bg-white rounded-[14px] border border-brand-pink/15 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-brand-pink/35 hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden text-left"
                  >
                    <a
                      href={courseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink rounded-[14px]"
                      aria-label={`Consultar informações e vagas para o curso de ${course.title} pelo WhatsApp`}
                    >
                      {/* Fotografia ocupando a parte superior (4:3) com ícone no canto */}
                      <div className="relative w-full">
                        <div className="relative w-full aspect-[4/3] rounded-t-[13px] overflow-hidden bg-brand-pink-light/20">
                          <picture>
                            <source srcSet={course.imageWebp} type="image/webp" />
                            <img
                              src={course.imageJpg}
                              alt={course.alt}
                              width={600}
                              height={450}
                              loading="eager"
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </picture>
                        </div>

                        {/* Ícone circular completo no canto da imagem, com contorno rosa sobreposto */}
                        <div
                          className="absolute -bottom-3.5 left-2.5 sm:left-3 w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-white border-[1.5px] border-brand-pink shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center z-20 transition-transform duration-200 group-hover:scale-110"
                          aria-hidden="true"
                        >
                          {getCourseIcon(course.id, 'w-3.5 h-3.5 text-brand-pink')}
                        </div>
                      </div>

                      {/* Nome do curso em área branca e seta à direita */}
                      <div className="p-2.5 sm:p-2 lg:p-2 xl:p-2.5 pt-3.5 sm:pt-3.5 lg:pt-3.5 xl:pt-4 flex flex-col justify-between flex-1 bg-white">
                        <h3 className="text-[10px] sm:text-[10.5px] lg:text-[10px] xl:text-[11.5px] font-semibold text-brand-slate-dark leading-[1.25] tracking-tight group-hover:text-brand-pink transition-colors break-words">
                          {course.title}
                        </h3>

                        {/* Pequena seta rosa posicionada à direita, na parte inferior */}
                        <div className="mt-2 flex justify-end items-center">
                          <span
                            className="w-4 h-4 rounded-full bg-[#FFF0F5] group-hover:bg-brand-pink flex items-center justify-center transition-colors duration-200"
                            aria-hidden="true"
                          >
                            <ArrowRight className="w-2.5 h-2.5 text-brand-pink group-hover:text-white stroke-[2.4] transition-colors" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data (Schema.org) para SEO Técnico no Brasil */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Cursos de Estética Profissional - Amanda Sandole',
            description:
              'Formação completa do básico ao avançado em estética avançada com aulas práticas e acompanhamento especializado.',
            numberOfItems: COURSES.length,
            itemListElement: COURSES.map((course, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Course',
                name: course.seoKeyword,
                description: course.description,
                provider: {
                  '@type': 'Organization',
                  name: 'Amanda Sandole Estética Avançada & Cursos Profissionais',
                  sameAs: 'https://amandapsandole.com.br',
                },
              },
            })),
          }),
        }}
      />
    </section>
  );
};
