export interface SocialLink {
  id: string;
  name: string;
  href: string;
  ariaLabel: string;
}

export interface FooterContent {
  brandName: string;
  copyrightYear: number;
  copyrightText: string;
  mottoText: string;
  socialLinks: SocialLink[];
}

export const FOOTER_DATA: FooterContent = {
  brandName: 'Amanda Sandole',
  copyrightYear: 2026,
  copyrightText: '© 2026 Amanda Sandole. Todos os direitos reservados.',
  mottoText: 'Beleza • Saúde • Confiança ♡',
  socialLinks: [
    {
      id: 'instagram',
      name: 'Instagram',
      href: 'https://instagram.com/amandasandole',
      ariaLabel: 'Acessar perfil de Amanda Sandole no Instagram (abre em nova aba)',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      href: 'https://facebook.com/amandasandole',
      ariaLabel: 'Acessar página de Amanda Sandole no Facebook (abre em nova aba)',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      href: 'https://youtube.com/@amandasandole',
      ariaLabel: 'Acessar canal de Amanda Sandole no YouTube (abre em nova aba)',
    },
  ],
};

