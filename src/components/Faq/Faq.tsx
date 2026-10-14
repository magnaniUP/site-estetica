import React, { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { FAQ_DATA } from '../../constants/faq';

export const Faq: React.FC = () => {
  // Controle de estado para o acordeão (permite abrir/fechar individualmente)
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full bg-[#FAF4F6] py-12 sm:py-14 lg:py-16 transition-colors relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Layout Desktop e Tablet fiel ao Mockup Original */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-8 xl:gap-10">
          
          {/* BLOCO DA ESQUERDA: FOTOGRAFIA + TEXTO / CTA WHATSAPP */}
          <div className="w-full lg:w-[48%] xl:w-[46%] flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-left">
            
            {/* Fotografia oficial do tratamento estético facial */}
            <div className="flex-shrink-0 w-full sm:w-[185px] md:w-[195px] xl:w-[205px] aspect-[187/107] sm:aspect-[4/3] rounded-[14px] sm:rounded-[16px] overflow-hidden bg-brand-pink/10 shadow-sm border border-[#EBE0E4]">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${FAQ_DATA.image.webp} 1x, ${FAQ_DATA.image.webp2x} 2x, ${FAQ_DATA.image.webp4x} 4x`}
                />
                <source
                  type="image/png"
                  srcSet={`${FAQ_DATA.image.png} 1x, ${FAQ_DATA.image.png2x} 2x, ${FAQ_DATA.image.png4x} 4x`}
                />
                <img
                  src={FAQ_DATA.image.png}
                  alt={FAQ_DATA.image.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>

            {/* Bloco Textual: Tag, H2, Subtítulo e Botão WhatsApp */}
            <div className="flex flex-col items-start w-full">
              {/* Tag da Seção em Rosa Vibrante */}
              <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.2em] text-[#E52E71] uppercase mb-1">
                {FAQ_DATA.tag}
              </span>

              {/* Título Principal (H2 semântico para hierarquia de títulos) */}
              <h2
                id="faq-heading"
                className="font-serif text-[24px] sm:text-[27px] lg:text-[29px] font-normal leading-[1.18] text-brand-slate-dark tracking-[-0.01em] mb-2"
              >
                {FAQ_DATA.title}
              </h2>

              {/* Subtítulo */}
              <p className="text-[11.5px] sm:text-[12px] text-[#59677A] font-normal leading-relaxed mb-3.5 max-w-sm">
                {FAQ_DATA.subtitle}
              </p>

              {/* Botão Oficial em Rosa Choque/Vibrante com Ícone do WhatsApp */}
              <a
                href={FAQ_DATA.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar agora pelo WhatsApp sobre os cursos da Amanda Sandole"
                className="group inline-flex items-center justify-center gap-2 h-[38px] px-4.5 sm:px-5 rounded-[8px] bg-[#E52E71] hover:bg-[#cb1f5e] active:bg-[#b81852] text-white text-[11px] sm:text-[11.5px] font-semibold tracking-wide shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E52E71] focus-visible:ring-offset-2 w-full sm:w-auto"
              >
                {/* Ícone vetorizado oficial do WhatsApp */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8.01 12.27C8.14 12.44 9.76 14.94 12.24 16C12.83 16.27 13.28 16.42 13.65 16.53C14.24 16.72 14.78 16.69 15.21 16.63C15.68 16.55 16.67 16.03 16.88 15.45C17.08 14.86 17.08 14.36 17.02 14.25C16.96 14.15 16.8 14.09 16.56 13.97C16.32 13.85 15.13 13.27 14.91 13.19C14.69 13.11 14.53 13.07 14.37 13.31C14.21 13.56 13.75 14.09 13.61 14.25C13.47 14.42 13.33 14.44 13.09 14.32C12.85 14.2 11.84 13.87 10.64 12.8C9.71 11.97 9.08 10.95 8.96 10.71C8.84 10.47 8.95 10.34 9.07 10.22C9.18 10.11 9.31 9.93 9.44 9.79C9.56 9.64 9.6 9.54 9.68 9.38C9.76 9.21 9.72 9.07 9.66 8.95C9.6 8.83 9.14 7.7 8.95 7.23C8.76 6.78 8.57 6.84 8.43 6.83L8.53 7.33Z" />
                </svg>
                <span>{FAQ_DATA.buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

          </div>

          {/* BLOCO DA DIREITA: CARTÃO BRANCO UNIFICADO COM AS 6 PERGUNTAS DO MOCKUP */}
          <div className="w-full lg:w-[52%] xl:w-[54%]">
            <div className="bg-white rounded-[14px] sm:rounded-[16px] border border-[#EBE3E5] shadow-[0_2px_12px_rgba(46,56,77,0.04)] divide-y divide-[#F5EDF0] overflow-hidden">
              {FAQ_DATA.items.map((item) => {
                const isOpen = !!openItems[item.id];

                return (
                  <div key={item.id} className="transition-colors">
                    {/* Linha da Pergunta Acessível via Botão */}
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      id={`faq-question-${item.id}`}
                      className="w-full text-left px-5 py-3 sm:px-6 sm:py-3.5 flex items-center justify-between gap-3 group transition-colors hover:bg-[#FAF4F6]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E52E71] focus-visible:ring-inset cursor-pointer"
                    >
                      <span className="text-[12.5px] sm:text-[13px] lg:text-[13.5px] font-medium text-[#4A5568] group-hover:text-brand-slate-dark transition-colors">
                        {item.question}
                      </span>

                      {/* Ícone de '+' em Rosa Choque do Mockup */}
                      <span
                        className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-[#E52E71] transition-transform duration-200"
                        aria-hidden="true"
                      >
                        <Plus
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isOpen ? 'rotate-45 stroke-[2.5]' : 'rotate-0 stroke-[2.2]'
                          }`}
                        />
                      </span>
                    </button>

                    {/* Resposta Expansível com Semântica WAI-ARIA */}
                    <div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${item.id}`}
                      className={`overflow-hidden transition-all duration-200 ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className="px-5 pb-3.5 sm:px-6 sm:pb-4 pt-1 bg-[#FCF8F9]/60 border-t border-[#F5EDF0]">
                        <p className="text-[12px] sm:text-[12.5px] text-[#59677A] font-normal leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faq;
