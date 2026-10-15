import { getWhatsAppUrl } from './navigation';

// Asset imports for reliable Vite bundling and relative path resolution
import relaxanteWebp from '../assets/cursos/curso-massagem-relaxante.webp';
import relaxanteJpg from '../assets/cursos/curso-massagem-relaxante.jpg';
import modeladoraWebp from '../assets/cursos/curso-massagem-modeladora.webp';
import modeladoraJpg from '../assets/cursos/curso-massagem-modeladora.jpg';
import drenagemWebp from '../assets/cursos/curso-drenagem-linfatica.webp';
import drenagemJpg from '../assets/cursos/curso-drenagem-linfatica.jpg';
import hidrolipoclasiaWebp from '../assets/cursos/curso-hidrolipoclasia.webp';
import hidrolipoclasiaJpg from '../assets/cursos/curso-hidrolipoclasia.jpg';
import ventosaterapiaWebp from '../assets/cursos/curso-ventosaterapia.webp';
import ventosaterapiaJpg from '../assets/cursos/curso-ventosaterapia.jpg';
import intradermoterapiaWebp from '../assets/cursos/curso-intradermoterapia.webp';
import intradermoterapiaJpg from '../assets/cursos/curso-intradermoterapia.jpg';
import microagulhamentoWebp from '../assets/cursos/curso-microagulhamento.webp';
import microagulhamentoJpg from '../assets/cursos/curso-microagulhamento.jpg';
import jatoPlasmaWebp from '../assets/cursos/curso-jato-de-plasma.webp';
import jatoPlasmaJpg from '../assets/cursos/curso-jato-de-plasma.jpg';
import limpezaPeleWebp from '../assets/cursos/curso-limpeza-de-pele.webp';
import limpezaPeleJpg from '../assets/cursos/curso-limpeza-de-pele.jpg';
import skinboosterWebp from '../assets/cursos/curso-skinbooster.webp';
import skinboosterJpg from '../assets/cursos/curso-skinbooster.jpg';

export interface Course {
  id: string;
  number: number;
  title: string;
  shortTitle?: string;
  category: 'corporal' | 'facial';
  imageJpg: string;
  imageWebp: string;
  alt: string;
  seoKeyword: string;
  description: string;
  whatsappMessage: string;
}

export const COURSES: Course[] = [
  {
    id: 'massagem-relaxante',
    number: 1,
    title: 'Massagem Relaxante',
    category: 'corporal',
    imageJpg: relaxanteJpg,
    imageWebp: relaxanteWebp,
    alt: 'Massagem relaxante em ambiente profissional de estética',
    seoKeyword: 'Curso de massagem relaxante',
    description: 'Aprenda manobras suaves, técnicas de descompressão muscular e aromaterapia para proporcionar bem-estar profundo.',
    whatsappMessage: 'Olá gostaria de mais informações',
  },
  {
    id: 'massagem-modeladora',
    number: 2,
    title: 'Massagem Modeladora',
    category: 'corporal',
    imageJpg: modeladoraJpg,
    imageWebp: modeladoraWebp,
    alt: 'Tratamento estético corporal com massagem modeladora profissional',
    seoKeyword: 'Curso de massagem modeladora',
    description: 'Técnicas manuais vigorosas e profundas para contorno corporal, redução de medidas e melhora da circulação.',
    whatsappMessage: 'Olá gostaria de mais informações',
  },
  {
    id: 'drenagem-linfatica',
    number: 3,
    title: 'Drenagem Linfática',
    category: 'corporal',
    imageJpg: drenagemJpg,
    imageWebp: drenagemWebp,
    alt: 'Procedimento de drenagem linfática corporal realizado por profissional de estética',
    seoKeyword: 'Curso de drenagem linfática',
    description: 'Método fisiológico de drenagem manual para eliminação de toxinas, redução de retenção hídrica e pós-operatório.',
    whatsappMessage: 'Olá gostaria de mais informações',
  },
  {
    id: 'hidrolipoclasia-nao-aspirativa',
    number: 4,
    title: 'Hidrolipoclasia Não Aspirativa Ultrassônica',
    shortTitle: 'Hidrolipoclasia Ultrassônica',
    category: 'corporal',
    imageJpg: hidrolipoclasiaJpg,
    imageWebp: hidrolipoclasiaWebp,
    alt: 'Aplicação de ultrassom estético em procedimento de hidrolipoclasia não aspirativa',
    seoKeyword: 'Curso de hidrolipoclasia não aspirativa ultrassônica',
    description: 'Protocolo avançado para quebra de adiposidade localizada combinando soro hipotônico e cavitação ultrassônica.',
    whatsappMessage: 'Olá gostaria de mais informações',
  },
  {
    id: 'ventosaterapia',
    number: 5,
    title: 'Ventosaterapia',
    category: 'corporal',
    imageJpg: ventosaterapiaJpg,
    imageWebp: ventosaterapiaWebp,
    alt: 'Aplicação de ventosas de vidro em procedimento terapêutico de ventosaterapia',
    seoKeyword: 'Curso de ventosaterapia estética',
    description: 'Técnica milenar com aplicação moderna para alívio de tensões, oxigenação tecidual e remodelagem estética.',
    whatsappMessage: 'Olá gostaria de mais informações',
  },
  {
    id: 'intradermoterapia',
    number: 6,
    title: 'Intradermoterapia',
    category: 'facial',
    imageJpg: intradermoterapiaJpg,
    imageWebp: intradermoterapiaWebp,
    alt: 'Tratamento de intradermoterapia facial para rejuvenescimento e hidratação tecidual',
    seoKeyword: 'Curso de intradermoterapia',
    description: 'Aplicação localizada de ativos estéticos estéreis (mesoterapia) para rejuvenescimento, flacidez e gordura localizada.',
    whatsappMessage: 'Olá gostaria de mais informações',
  },
  {
    id: 'microagulhamento',
    number: 7,
    title: 'Microagulhamento',
    category: 'facial',
    imageJpg: microagulhamentoJpg,
    imageWebp: microagulhamentoWebp,
    alt: 'Procedimento estético de microagulhamento com dermapen profissional',
    seoKeyword: 'Curso de microagulhamento',
    description: 'Indução percutânea de colágeno (IPCA) com Dermapen e drug delivery para cicatrizes, manchas e rejuvenescimento.',
    whatsappMessage: 'Olá gostaria de mais informações',
  },
  {
    id: 'jato-de-plasma',
    number: 8,
    title: 'Jato de Plasma',
    category: 'facial',
    imageJpg: jatoPlasmaJpg,
    imageWebp: jatoPlasmaWebp,
    alt: 'Aplicação de jato de plasma para rejuvenescimento e lifting não cirúrgico',
    seoKeyword: 'Curso de jato de plasma',
    description: 'Tratamento de alta precisão para blefaroplastia não cirúrgica, retração de pálpebras, linhas de expressão e rugas.',
    whatsappMessage: 'Olá gostaria de mais informações',
  },
  {
    id: 'limpeza-de-pele',
    number: 9,
    title: 'Limpeza de Pele',
    category: 'facial',
    imageJpg: limpezaPeleJpg,
    imageWebp: limpezaPeleWebp,
    alt: 'Protocolo completo de limpeza de pele profunda em clínica de estética',
    seoKeyword: 'Curso de limpeza de pele',
    description: 'Protocolo minucioso de higienização, emoliência, extração indolor, alta frequência e fototerapia para pele impecável.',
    whatsappMessage: 'Olá gostaria de mais informações',
  },
  {
    id: 'skinbooster',
    number: 10,
    title: 'Skinbooster',
    category: 'facial',
    imageJpg: skinboosterJpg,
    imageWebp: skinboosterWebp,
    alt: 'Procedimento de skinbooster para hidratação profunda e luminosidade da pele',
    seoKeyword: 'Curso de skinbooster',
    description: 'Hidratação injetável profunda com ácido hialurônico de baixa reticulação para devolver viço, elasticidade e brilho natural.',
    whatsappMessage: 'Olá gostaria de mais informações',
  },
];

export const COURSES_SECTION_WHATSAPP_MESSAGE =
  'Olá gostaria de mais informações';

export const getCourseWhatsAppUrl = (course?: Course): string => {
  return getWhatsAppUrl('Olá gostaria de mais informações');
};
