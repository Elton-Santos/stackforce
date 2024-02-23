import React from 'react';
import '/src/styles/section-context-one.css';

interface SectionContentOne {
  title: string;
  description: string;
}

const SectionContextOne: React.FC<SectionContentOne> = ({ title, description }) => {
  return (
    <section className="section-context-one">
      <h2>{title}</h2>
      <p>{description}</p>
      {/* Adicione mais elementos conforme necessário */}
    </section>
  );
};

export default SectionContextOne;
