import React from 'react';
import '/src/styles/section-context-two.css';

interface SectionContenttwo {
  title: string;
  description: string;
}

const SectionContextTwo: React.FC<SectionContenttwo> = ({ title, description }) => {
  return (
    <section className="section-context-two">
      <h2>{title}</h2>
      <p>{description}</p>
      {/* Adicione mais elementos conforme necessário */}
    </section>
  );
};

export default SectionContextTwo;
