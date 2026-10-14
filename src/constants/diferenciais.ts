import { getWhatsAppUrl } from './navigation';

export interface DifferentialItem {
  id: string;
  title: string;
  titleBreak?: string[];
  description: string;
  descriptionBreak?: string[];
}

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: 'conteudo-atualizado',
    title: 'Conteúdo atualizado',
    titleBreak: ['Conteúdo', 'atualizado'],
    description: 'com as tendências do mercado.',
    descriptionBreak: ['com as tendências', 'do mercado.'],
  },
  {
    id: 'professores-especializados',
    title: 'Professores especializados',
    titleBreak: ['Professores', 'especializados'],
    description: 'com experiência na área da estética.',
    descriptionBreak: ['com experiência', 'na área da estética.'],
  },
  {
    id: 'aulas-praticas',
    title: 'Aulas 100% práticas',
    titleBreak: ['Aulas 100%', 'práticas'],
    description: 'você aprende fazendo.',
    descriptionBreak: ['você aprende', 'fazendo.'],
  },
  {
    id: 'suporte-continuo-1',
    title: 'Suporte contínuo',
    titleBreak: ['Suporte', 'contínuo'],
    description: 'válido no pós e em todo território nacional.',
    descriptionBreak: ['válido o pós e', 'e território nacional.'],
  },
  {
    id: 'suporte-pos-curso',
    title: 'Suporte contínuo',
    titleBreak: ['Suporte', 'contínuo'],
    description: 'mesmo após o término do curso.',
    descriptionBreak: ['mesmo após', 'o término do curso.'],
  },
  {
    id: 'ambiente-moderno',
    title: 'Ambiente moderno e acolhedor',
    titleBreak: ['Ambiente moderno', 'e acolhedor'],
    description: 'equipamentos de qualidade.',
    descriptionBreak: ['equipamentos de', 'qualidade.'],
  },
];

export const DIFERENCIAIS_SECTION_WHATSAPP_MESSAGE =
  'Olá! Gostaria de garantir minha vaga e saber mais sobre a metodologia e diferenciais dos cursos da Amanda Sandole.';

export const getDiferenciaisWhatsAppUrl = (): string => {
  return getWhatsAppUrl(DIFERENCIAIS_SECTION_WHATSAPP_MESSAGE);
};

