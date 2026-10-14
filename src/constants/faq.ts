import { getWhatsAppUrl, WHATSAPP_QUESTIONS_MESSAGE } from './navigation';

import faqTreatmentPng from '../assets/faq-treatment.png';
import faqTreatment2xPng from '../assets/faq-treatment@2x.png';
import faqTreatment4xPng from '../assets/faq-treatment@4x.png';
import faqTreatmentWebp from '../assets/faq-treatment.webp';
import faqTreatment2xWebp from '../assets/faq-treatment@2x.webp';
import faqTreatment4xWebp from '../assets/faq-treatment@4x.webp';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqSectionData {
  tag: string;
  title: string;
  subtitle: string;
  buttonText: string;
  getWhatsAppUrl: () => string;
  image: {
    png: string;
    png2x: string;
    png4x: string;
    webp: string;
    webp2x: string;
    webp4x: string;
    alt: string;
  };
  items: FaqItem[];
}

export const FAQ_DATA: FaqSectionData = {
  tag: 'PERGUNTAS FREQUENTES',
  title: 'Tire suas dúvidas',
  subtitle: 'Aqui você encontra as principais dúvidas sobre os nossos cursos. Se preferir, fale com a gente pelo WhatsApp!',
  buttonText: 'Falar agora pelo WhatsApp',
  getWhatsAppUrl: () => getWhatsAppUrl('Olá! Gostaria de tirar algumas dúvidas sobre os cursos da Amanda Sandole.'),
  image: {
    png: faqTreatmentPng,
    png2x: faqTreatment2xPng,
    png4x: faqTreatment4xPng,
    webp: faqTreatmentWebp,
    webp2x: faqTreatment2xWebp,
    webp4x: faqTreatment4xWebp,
    alt: 'Procedimento estético facial realizado em cliente com pele radiante',
  },
  items: [
    {
      id: 'duracao-cursos',
      question: 'Qual é a duração dos cursos?',
      // [TEXTO PROVISÓRIO PARA REVISÃO DO CLIENTE]: Carga horária ajustável conforme a grade oficial
      answer:
        'A carga horária varia de acordo com cada especialização e metodologia escolhida. Nossos módulos combinam fundamentação teórica sólida e prática intensiva com modelos reais para garantir que você conclua o curso com total segurança em seus atendimentos.',
    },
    {
      id: 'experiencia-previa',
      question: 'Preciso ter experiência na área para fazer o curso?',
      // [TEXTO PROVISÓRIO PARA REVISÃO DO CLIENTE]: Didática estruturada para acolher iniciantes e graduadas
      answer:
        'Não é necessária experiência prévia. O método da Amanda Sandole é estruturado passo a passo, desde os fundamentos essenciais de biossegurança e anatomia até a execução prática assistida de cada técnica, acolhendo iniciantes e profissionais.',
    },
    {
      id: 'certificado-reconhecido',
      question: 'O certificado é reconhecido?',
      // [TEXTO PROVISÓRIO PARA REVISÃO DO CLIENTE]: Informação baseada na Lei nº 9.394/96 para Cursos Livres de Capacitação
      answer:
        'Sim! Nossos cursos são Cursos Livres de Educação Profissional amparados pela legislação brasileira (Lei nº 9.394/96). Ao concluir sua formação, você recebe um Certificado Profissional válido em todo o território nacional.',
    },
    {
      id: 'pratica-modelo-real',
      question: 'Os cursos têm prática em modelo real?',
      // [TEXTO PROVISÓRIO PARA REVISÃO DO CLIENTE]: Treinamento prático supervisionado em clínica
      answer:
        'Sim! A prática supervisionada em modelos reais é um dos principais diferenciais da nossa metodologia, permitindo que você aplique cada técnica sob a orientação direta e atenta da Amanda Sandole.',
    },
    {
      id: 'parcelar-pagamento',
      question: 'Posso parcelar o pagamento?',
      // [TEXTO PROVISÓRIO PARA REVISÃO DO CLIENTE]: Modalidades flexíveis de parcelamento
      answer:
        'Sim, disponibilizamos opções facilitadas de pagamento no cartão de crédito em até 12x, além de condições especiais para pagamento à vista via Pix ou transferência bancária. Fale com nossa equipe para conferir.',
    },
    {
      id: 'o-que-esta-incluso',
      question: 'O que está incluso no curso?',
      // [TEXTO PROVISÓRIO PARA REVISÃO DO CLIENTE]: Itens inclusos na formação
      answer:
        'Está incluso todo o material didático teórico, todos os insumos, dermocosméticos e descartáveis utilizados durante as práticas em modelos reais, certificado profissional de conclusão e suporte pós-curso.',
    },
  ],
};
