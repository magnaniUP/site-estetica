import { getWhatsAppUrl } from './navigation';

export interface QuemSomosHighlight {
  id: string;
  text: string;
}

export interface QuemSomosIndicator {
  id: string;
  value: string;
  label: string;
  icon: 'alunas' | 'avaliacao' | 'certificado' | 'suporte';
}

export const QUEM_SOMOS_TITLE_LINE1 = 'Amanda Sandole.';
export const QUEM_SOMOS_TITLE_LINE2 = 'Ensino com propósito.';

export const QUEM_SOMOS_BIO =
  'Sou Amanda Sandole, esteticista e especialista em cursos de estética. Minha missão é compartilhar conhecimento de forma prática, acessível e transformadora, ajudando você a conquistar o mercado da estética.';

export const QUEM_SOMOS_HIGHLIGHTS: QuemSomosHighlight[] = [
  {
    id: 'experiencia',
    text: '+5 anos de experiência',
  },
  {
    id: 'alcance',
    text: 'Alunas em todo o Brasil',
  },
  {
    id: 'metodologia',
    text: 'Metodologia prática e humanizada',
  },
];

export const QUEM_SOMOS_INDICATORS: QuemSomosIndicator[] = [
  {
    id: 'alunas',
    value: '+1.500',
    label: 'alunas formadas',
    icon: 'alunas',
  },
  {
    id: 'avaliacao',
    value: '4,9',
    label: 'avaliação média',
    icon: 'avaliacao',
  },
  {
    id: 'certificado',
    value: '100%',
    label: 'certificado reconhecido',
    icon: 'certificado',
  },
  {
    id: 'suporte',
    value: 'Suporte',
    label: 'pós-curso',
    icon: 'suporte',
  },
];

export const WHATSAPP_QUEM_SOMOS_MESSAGE =
  'Olá gostaria de mais informações';

export const getQuemSomosWhatsAppUrl = (): string => {
  return getWhatsAppUrl(WHATSAPP_QUEM_SOMOS_MESSAGE);
};

