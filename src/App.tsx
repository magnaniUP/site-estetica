import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Courses } from './components/Courses';
import { Diferenciais } from './components/Diferenciais';

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
          Marcadores de âncoras semânticos para as próximas etapas
        */}
        <div id="trabalhos" className="sr-only">Trabalhos Executados</div>
        <div id="quem-somos" className="sr-only">Quem Somos</div>
        <div id="faq" className="sr-only">FAQ</div>
        <div id="contatos" className="sr-only">Contatos</div>
      </main>
    </div>
  );
};

export default App;
