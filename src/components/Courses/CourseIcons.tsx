import React from 'react';

interface IconProps {
  className?: string;
}

// 1. Massagem Relaxante: Calendário de bem-estar / flor de lótus suave
export const RelaxingMassageIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5 text-brand-pink' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M12 14c-1.5 0-2.5 1-2.5 2s1 2 2.5 2 2.5-1 2.5-2-1-2-2.5-2z" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

// 2. Massagem Modeladora: Silhueta de contorno corporal / cintura feminina
export const ModelingMassageIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5 text-brand-pink' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M6 3c2 3 1 6 3 9-2 3-1 6-3 9" />
    <path d="M18 3c-2 3-1 6-3 9 2 3 1 6 3 9" />
    <ellipse cx="12" cy="12" rx="2" ry="1.5" />
  </svg>
);

// 3. Drenagem Linfática: Pernas e fluxo linfático
export const LymphaticDrainageIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5 text-brand-pink' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M9 3v9c0 2-1 4-1 6 0 1.5.5 3 2 3" />
    <path d="M15 3v9c0 2 1 4 1 6 0 1.5-.5 3-2 3" />
    <path d="M9 10h6" strokeDasharray="1 2" />
  </svg>
);

// 4. Hidrolipoclasia: Ondas de ultrassom / cavitação
export const HydrolipoclasiaIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5 text-brand-pink' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M8 8a6 6 0 0 0 0 8" />
    <path d="M16 8a6 6 0 0 1 0 8" />
    <path d="M5 5a10 10 0 0 0 0 14" />
    <path d="M19 5a10 10 0 0 1 0 14" />
  </svg>
);

// 5. Ventosaterapia: Ventosas de sucção
export const CuppingTherapyIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5 text-brand-pink' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M8 7c0-2 1-3 4-3s4 1 4 3v3c1.5 2 2 4 2 7H6c0-3 .5-5 2-7V7z" />
    <circle cx="12" cy="4" r="1.5" />
    <line x1="7" y1="17" x2="17" y2="17" />
  </svg>
);

// 6. Intradermoterapia: Mesoterapia / microinjeções dérmicas
export const IntradermotherapyIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5 text-brand-pink' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m18 2 4 4" />
    <path d="m17 7 3-3" />
    <path d="M19 9 8.7 19.3c-.4.4-1 .6-1.6.6H3v-4.1c0-.6.2-1.2.6-1.6L14 3.9" />
    <path d="m9 9 6 6" />
  </svg>
);

// 7. Microagulhamento: Caneta Dermapen
export const MicroneedlingIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5 text-brand-pink' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 2v14" />
    <path d="M9 16l3 6 3-6H9z" fill="currentColor" fillOpacity="0.2" />
    <rect x="9.5" y="4" width="5" height="10" rx="1" />
    <line x1="8" y1="8" x2="16" y2="8" />
  </svg>
);

// 8. Jato de Plasma: Caneta de plasma com arco elétrico
export const PlasmaJetIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5 text-brand-pink' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

// 9. Limpeza de Pele: Espátula ultrassônica de peeling
export const SkinCleansingIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5 text-brand-pink' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M6 3h12l-2 9H8L6 3z" />
    <path d="M10 12v9h4v-9" />
    <circle cx="12" cy="7" r="1.5" />
  </svg>
);

// 10. Skinbooster: Gotícula de ácido hialurônico / escudo de hidratação
export const SkinboosterIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5 text-brand-pink' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    <path d="M12 9a3 3 0 0 0-3 3" />
  </svg>
);

export const getCourseIcon = (id: string, className?: string) => {
  switch (id) {
    case 'massagem-relaxante':
      return <RelaxingMassageIcon className={className} />;
    case 'massagem-modeladora':
      return <ModelingMassageIcon className={className} />;
    case 'drenagem-linfatica':
      return <LymphaticDrainageIcon className={className} />;
    case 'hidrolipoclasia-nao-aspirativa':
      return <HydrolipoclasiaIcon className={className} />;
    case 'ventosaterapia':
      return <CuppingTherapyIcon className={className} />;
    case 'intradermoterapia':
      return <IntradermotherapyIcon className={className} />;
    case 'microagulhamento':
      return <MicroneedlingIcon className={className} />;
    case 'jato-de-plasma':
      return <PlasmaJetIcon className={className} />;
    case 'limpeza-de-pele':
      return <SkinCleansingIcon className={className} />;
    case 'skinbooster':
      return <SkinboosterIcon className={className} />;
    default:
      return <RelaxingMassageIcon className={className} />;
  }
};

