import React from 'react';

interface IconProps {
  className?: string;
}

// 1. Conteúdo atualizado: Prancheta / documento com caneta
export const DocumentContentIcon: React.FC<IconProps> = ({ className = 'w-5 h-5 text-brand-pink' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

// 2. Professores especializados: Instrutor / mentora de estética
export const InstructorIcon: React.FC<IconProps> = ({ className = 'w-5 h-5 text-brand-pink' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// 3. Aulas 100% práticas: Coração com dedicação / prática visual
export const PracticalHeartIcon: React.FC<IconProps> = ({ className = 'w-5 h-5 text-brand-pink' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <circle cx="12" cy="11" r="2" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

// 4. Suporte contínuo: Bússola / acompanhamento constante
export const SupportLocationIcon: React.FC<IconProps> = ({ className = 'w-5 h-5 text-brand-pink' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

// 5. Suporte pós-curso: Relógio com suporte contínuo no tempo
export const SupportClockIcon: React.FC<IconProps> = ({ className = 'w-5 h-5 text-brand-pink' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// 6. Ambiente moderno e acolhedor: Clínica / kit estético profissional
export const ModernClinicIcon: React.FC<IconProps> = ({ className = 'w-5 h-5 text-brand-pink' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="3" y="6" width="18" height="15" rx="2" />
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="12" y1="11" x2="12" y2="16" />
    <line x1="9.5" y1="13.5" x2="14.5" y2="13.5" />
  </svg>
);

export const getDifferentialIcon = (id: string, className?: string) => {
  switch (id) {
    case 'conteudo-atualizado':
      return <DocumentContentIcon className={className} />;
    case 'professores-especializados':
      return <InstructorIcon className={className} />;
    case 'aulas-praticas':
      return <PracticalHeartIcon className={className} />;
    case 'suporte-continuo-1':
      return <SupportLocationIcon className={className} />;
    case 'suporte-pos-curso':
      return <SupportClockIcon className={className} />;
    case 'ambiente-moderno':
      return <ModernClinicIcon className={className} />;
    default:
      return <DocumentContentIcon className={className} />;
  }
};

