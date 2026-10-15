import { WHATSAPP_PHONE_NUMBER } from './navigation';

export interface ContatosContent {
  headlinePhrase: string;
  buttonText: string;
  subtext: string;
  logoAlt: string;
  whatsappMessage: string;
}

export const CONTATOS_DATA: ContatosContent = {
  headlinePhrase: 'Dê o primeiro passo para a sua nova carreira!',
  buttonText: 'Falar agora no WhatsApp',
  subtext: 'Tire suas dúvidas, garanta sua vaga e comece hoje mesmo!',
  logoAlt: 'Amanda Sandole - Estética Avançada & Cursos Profissionais',
  whatsappMessage: 'Olá! Gostaria de tirar dúvidas, conhecer os cursos e dar o primeiro passo na minha carreira com a Amanda Sandole.',
};

/**
 * Retorna o link oficial do WhatsApp no padrão https://wa.me/
 * Caso o número ainda não tenha sido configurado (placeholder oficial),
 * direciona para api.whatsapp.com com a mensagem pré-preenchida sem expor número fictício.
 */
export const getContatosWhatsAppUrl = (customMessage?: string): string => {
  const message = customMessage || CONTATOS_DATA.whatsappMessage;
  const cleanPhone = (WHATSAPP_PHONE_NUMBER || '').replace(/\D/g, '');

  if (!cleanPhone) {
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  }

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
};

