import { getWhatsAppUrl } from './navigation';

import capilarPng from '../assets/trabalhos/trabalho-terapia-capilar.png';
import capilar2xPng from '../assets/trabalhos/trabalho-terapia-capilar@2x.png';
import capilar4xPng from '../assets/trabalhos/trabalho-terapia-capilar@4x.png';
import capilarWebp from '../assets/trabalhos/trabalho-terapia-capilar.webp';
import capilar2xWebp from '../assets/trabalhos/trabalho-terapia-capilar@2x.webp';
import capilar4xWebp from '../assets/trabalhos/trabalho-terapia-capilar@4x.webp';
import capilarAntesWebp from '../assets/trabalhos/trabalho-terapia-capilar-antes.webp';
import capilarAntesPng from '../assets/trabalhos/trabalho-terapia-capilar-antes.png';
import capilarDepoisWebp from '../assets/trabalhos/trabalho-terapia-capilar-depois.webp';
import capilarDepoisPng from '../assets/trabalhos/trabalho-terapia-capilar-depois.png';

import jatoPlasmaPng from '../assets/trabalhos/trabalho-jato-de-plasma.png';
import jatoPlasma2xPng from '../assets/trabalhos/trabalho-jato-de-plasma@2x.png';
import jatoPlasma4xPng from '../assets/trabalhos/trabalho-jato-de-plasma@4x.png';
import jatoPlasmaWebp from '../assets/trabalhos/trabalho-jato-de-plasma.webp';
import jatoPlasma2xWebp from '../assets/trabalhos/trabalho-jato-de-plasma@2x.webp';
import jatoPlasma4xWebp from '../assets/trabalhos/trabalho-jato-de-plasma@4x.webp';
import jatoPlasmaAntesWebp from '../assets/trabalhos/trabalho-jato-de-plasma-antes.webp';
import jatoPlasmaAntesPng from '../assets/trabalhos/trabalho-jato-de-plasma-antes.png';
import jatoPlasmaDepoisWebp from '../assets/trabalhos/trabalho-jato-de-plasma-depois.webp';
import jatoPlasmaDepoisPng from '../assets/trabalhos/trabalho-jato-de-plasma-depois.png';

import botoxPng from '../assets/trabalhos/trabalho-toxina-botulinica.png';
import botox2xPng from '../assets/trabalhos/trabalho-toxina-botulinica@2x.png';
import botox4xPng from '../assets/trabalhos/trabalho-toxina-botulinica@4x.png';
import botoxWebp from '../assets/trabalhos/trabalho-toxina-botulinica.webp';
import botox2xWebp from '../assets/trabalhos/trabalho-toxina-botulinica@2x.webp';
import botox4xWebp from '../assets/trabalhos/trabalho-toxina-botulinica@4x.webp';
import botoxAntesWebp from '../assets/trabalhos/trabalho-toxina-botulinica-antes.webp';
import botoxAntesPng from '../assets/trabalhos/trabalho-toxina-botulinica-antes.png';
import botoxDepoisWebp from '../assets/trabalhos/trabalho-toxina-botulinica-depois.webp';
import botoxDepoisPng from '../assets/trabalhos/trabalho-toxina-botulinica-depois.png';

export interface TrabalhoItem {
  id: string;
  title: string;
  procedure: string;
  cardSubtitle?: string;
  description: string;
  image: string;
  image2x?: string;
  image4x?: string;
  imageWebp: string;
  imageWebp2x?: string;
  imageWebp4x?: string;
  antesImageWebp: string;
  antesImagePng: string;
  depoisImageWebp: string;
  depoisImagePng: string;
  beforeLabel: string;
  afterLabel: string;
  altText: string;
}

export interface TrabalhosSectionData {
  tag: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  ctaText: string;
  whatsappMessage: string;
  getCtaUrl: () => string;
  disclaimer: string;
  items: TrabalhoItem[];
}

export const TRABALHOS_DATA: TrabalhosSectionData = {
  tag: 'TRABALHOS EXECUTADOS',
  title: 'Veja as transformações reais realizadas por Amanda Sandole.',
  subtitle: 'Beleza, técnica e confiança em cada detalhe.',
  ctaText: 'AGENDE JÁ O SEU PROCEDIMENTO',
  whatsappMessage: 'Olá gostaria de mais informações',
  getCtaUrl: () => getWhatsAppUrl('Olá gostaria de mais informações'),
  disclaimer: '* Fotografias reais de procedimentos realizados por Amanda Sandole. Resultados podem variar conforme avaliação individual e resposta biológica de cada organismo.',
  items: [
    {
      id: 'terapia-capilar',
      title: 'Terapia Capilar',
      procedure: 'Terapia Capilar Avançada',
      cardSubtitle: 'Densidade e fortalecimento dos fios.',
      description: 'Estímulo e recuperação dos folículos capilares, densidade e fortalecimento dos fios.',
      image: capilarPng,
      image2x: capilar2xPng,
      image4x: capilar4xPng,
      imageWebp: capilarWebp,
      imageWebp2x: capilar2xWebp,
      imageWebp4x: capilar4xWebp,
      antesImageWebp: capilarAntesWebp,
      antesImagePng: capilarAntesPng,
      depoisImageWebp: capilarDepoisWebp,
      depoisImagePng: capilarDepoisPng,
      beforeLabel: 'Antes',
      afterLabel: 'Depois',
      altText: 'Antes e depois de terapia capilar realizada por Amanda Sandole',
    },
    {
      id: 'jato-de-plasma',
      title: 'Jato de Plasma',
      procedure: 'Jato de Plasma (Blefaroplastia sem Cortes)',
      cardSubtitle: 'Lifting e retração palpebral.',
      description: 'Lifting não cirúrgico para retração de pálpebras, rejuvenescimento e redução de linhas de expressão.',
      image: jatoPlasmaPng,
      image2x: jatoPlasma2xPng,
      image4x: jatoPlasma4xPng,
      imageWebp: jatoPlasmaWebp,
      imageWebp2x: jatoPlasma2xWebp,
      imageWebp4x: jatoPlasma4xWebp,
      antesImageWebp: jatoPlasmaAntesWebp,
      antesImagePng: jatoPlasmaAntesPng,
      depoisImageWebp: jatoPlasmaDepoisWebp,
      depoisImagePng: jatoPlasmaDepoisPng,
      beforeLabel: 'Antes',
      afterLabel: 'Depois',
      altText: 'Antes e depois de jato de plasma em pálpebras realizado por Amanda Sandole',
    },
    {
      id: 'toxina-botulinica',
      title: 'Toxina Botulínica',
      procedure: 'Toxina Botulínica (Harmonização Facial)',
      cardSubtitle: 'Suaviza linhas de expressão.',
      description: 'Relaxamento muscular seguro e suavização completa de rugas dinâmicas e linhas de expressão na testa.',
      image: botoxPng,
      image2x: botox2xPng,
      image4x: botox4xPng,
      imageWebp: botoxWebp,
      imageWebp2x: botox2xWebp,
      imageWebp4x: botox4xWebp,
      antesImageWebp: botoxAntesWebp,
      antesImagePng: botoxAntesPng,
      depoisImageWebp: botoxDepoisWebp,
      depoisImagePng: botoxDepoisPng,
      beforeLabel: 'Antes',
      afterLabel: 'Depois',
      altText: 'Antes e depois de toxina botulínica na testa realizado por Amanda Sandole',
    },
  ],
};
