export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Cursos', href: '#cursos', id: 'cursos' },
  { label: 'Trabalhos Executados', href: '#trabalhos', id: 'trabalhos' },
  { label: 'Quem Somos', href: '#quem-somos', id: 'quem-somos' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
  { label: 'Contatos', href: '#contatos', id: 'contatos' },
];

/**
 * CONFIGURAÇÃO DO WHATSAPP COMERCIAL:
 * Substitua pelo número oficial (DDI + DDD + Número, ex: "5511999999999").
 * CONFIGURAÇÃO PENDENTE: Aguardando o número comercial oficial da Amanda Sandole.
 */
export const WHATSAPP_PHONE_NUMBER = ''; // [CONFIGURAÇÃO PENDENTE] Insira o número oficial aqui quando fornecido
export const WHATSAPP_DEFAULT_MESSAGE = 'Olá! Gostaria de mais informações sobre os cursos de estética profissional da Amanda Sandole.';
export const WHATSAPP_ENROLL_MESSAGE = 'Olá! Gostaria de garantir minha vaga nos cursos de estética profissional da Amanda Sandole.';
export const WHATSAPP_QUESTIONS_MESSAGE = 'Olá! Gostaria de tirar algumas dúvidas sobre os cursos de estética profissional da Amanda Sandole.';

export const getWhatsAppUrl = (customMessage?: string): string => {
  const message = customMessage || WHATSAPP_DEFAULT_MESSAGE;
  if (!WHATSAPP_PHONE_NUMBER) {
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  }
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_NUMBER}&text=${encodeURIComponent(message)}`;
};

