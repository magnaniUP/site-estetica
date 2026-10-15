import { getWhatsAppUrl } from './navigation';

import avatarJulianaWebp from '../assets/avatar-juliana.webp';
import avatarJulianaPng from '../assets/avatar-juliana.png';
import avatarMarianeWebp from '../assets/avatar-mariane.webp';
import avatarMarianePng from '../assets/avatar-mariane.png';
import avatarCamilaWebp from '../assets/avatar-camila.webp';
import avatarCamilaPng from '../assets/avatar-camila.png';

export interface TestimonialItem {
  id: string;
  name: string;
  course: string;
  quote: string;
  rating: number;
  avatarWebp: string;
  avatarPng: string;
}

export const TESTIMONIALS_TAG = 'DEPOIMENTOS';
export const TESTIMONIALS_TITLE = 'Quem já viveu, recomenda.';
export const TESTIMONIALS_SUBTITLE =
  'Histórias de quem escolheu investir no conhecimento e dar novos passos na área da estética.';

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'juliana-s',
    name: 'Juliana S.',
    course: 'Massagem Modeladora',
    quote:
      'O curso de massagem modeladora superou todas as minhas expectativas. A didática é excelente e o suporte é incrível!',
    rating: 5,
    avatarWebp: avatarJulianaWebp,
    avatarPng: avatarJulianaPng,
  },
  {
    id: 'mariane-l',
    name: 'Mariane L.',
    course: 'Formação em Estética',
    quote:
      'A metodologia é incrível! Já estou atendendo minhas clientes e colocando em prática tudo o que aprendi.',
    rating: 5,
    avatarWebp: avatarMarianeWebp,
    avatarPng: avatarMarianePng,
  },
  {
    id: 'camila-r',
    name: 'Camila R.',
    course: 'Atendimento Estético',
    quote:
      'Profissionais atenciosas, ambiente lindo e todo cuidado que a gente merece. Só tenho a agradecer!',
    rating: 5,
    avatarWebp: avatarCamilaWebp,
    avatarPng: avatarCamilaPng,
  },
];

export const WHATSAPP_MORE_TESTIMONIALS_MESSAGE =
  'Olá gostaria de mais informações';

export const getMoreTestimonialsWhatsAppUrl = (): string => {
  return getWhatsAppUrl(WHATSAPP_MORE_TESTIMONIALS_MESSAGE);
};

