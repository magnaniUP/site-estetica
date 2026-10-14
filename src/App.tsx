import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Courses } from './components/Courses';
import { Diferenciais } from './components/Diferenciais';
import { QuemSomos } from './components/QuemSomos';
import { Depoimentos } from './components/Depoimentos';
import { TrabalhosExecutados } from './components/TrabalhosExecutados';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FCF3F5] text-brand-slate-dark">
      {/* 
        Etapa 1: Cabeçalho Oficial Preservado
      */}
      <Header />

      {/* 
        Etapa 2: Primeira Dobra (Hero Section) Oficial
      */}
      <main>
        <Hero />

        {/* 
          Etapa 3: Seção Nossos Cursos Oficial
        */}
        <Courses />

        {/* 
          Etapa 4: Seção Por Que Escolher a Amanda Sandole (Diferenciais)
        */}
        <Diferenciais />

        {/* 
          Etapa 5: Seção Quem Somos (Amanda Sandole. Ensino com propósito.)
        */}
        <QuemSomos />

        {/* 
          Etapa 6: Seção Depoimentos (Quem já viveu, recomenda.)
        */}
        <Depoimentos />

        {/* 
          Etapa 7: Seção Trabalhos Executados Oficial
        */}
        <TrabalhosExecutados />

        {/* 
          Marcadores de âncoras semânticos para as próximas etapas
        */}
        <div id="faq" className="sr-only">FAQ</div>
        <div id="contatos" className="sr-only">Contatos</div>
      </main>
    </div>
  );
};

export default App;
