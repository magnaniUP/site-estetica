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
 * Número oficial da Amanda Sandole: 5544999404350
 * Mensagem padrão ao abrir o WhatsApp: "Olá gostaria de mais informações"
 */
export const WHATSAPP_PHONE_NUMBER = '5544999404350';
export const WHATSAPP_DEFAULT_MESSAGE = 'Olá gostaria de mais informações';
export const WHATSAPP_ENROLL_MESSAGE = 'Olá gostaria de mais informações';
export const WHATSAPP_QUESTIONS_MESSAGE = 'Olá gostaria de mais informações';

export const getWhatsAppUrl = (customMessage?: string): string => {
  const message = customMessage || WHATSAPP_DEFAULT_MESSAGE;
  const cleanPhone = (WHATSAPP_PHONE_NUMBER || '').replace(/\D/g, '');
  if (!cleanPhone) {
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
};

