import React from 'react';

interface IconProps {
  className?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}

export const CheckCircleBadgeIcon: React.FC<IconProps> = ({
  className = 'w-4 h-4 text-brand-pink',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden={ariaHidden}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const AlunasIcon: React.FC<IconProps> = ({
  className = 'w-5 h-5 text-brand-pink',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden={ariaHidden}
  >
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21v-2a4.5 4.5 0 0 1 4.5-4.5h4a4.5 4.5 0 0 1 4.5 4.5v2" />
  </svg>
);

export const AvaliacaoStarIcon: React.FC<IconProps> = ({
  className = 'w-5 h-5 text-brand-pink',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden={ariaHidden}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const CertificadoShieldIcon: React.FC<IconProps> = ({
  className = 'w-5 h-5 text-brand-pink',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden={ariaHidden}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9.5 12 1.8 1.8 3.5-3.5" />
  </svg>
);

export const SuporteHeadsetIcon: React.FC<IconProps> = ({
  className = 'w-5 h-5 text-brand-pink',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden={ariaHidden}
  >
    {/* Headset / Support person line art matching mockup */}
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    <circle cx="12" cy="11" r="3" />
  </svg>
);

export const getIndicatorIcon = (
  iconType: 'alunas' | 'avaliacao' | 'certificado' | 'suporte',
  className?: string
) => {
  switch (iconType) {
    case 'alunas':
      return <AlunasIcon className={className} />;
    case 'avaliacao':
      return <AvaliacaoStarIcon className={className} />;
    case 'certificado':
      return <CertificadoShieldIcon className={className} />;
    case 'suporte':
      return <SuporteHeadsetIcon className={className} />;
    default:
      return null;
  }
};

