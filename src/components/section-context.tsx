import React from 'react';
import '/src/styles/section-context.css';

interface SectionContentProps {
  title: string;
  description: string;
}

const SectionContext: React.FC<SectionContentProps> = ({ title, description }) => {
  return (
    <section className="section-context">
      <h2>{title}</h2>
      <p>{description}</p>
      {/* Adicione mais elementos conforme necessário */}
    </section>
  );
};

export default SectionContext;
