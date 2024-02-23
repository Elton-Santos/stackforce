import React from 'react';
import '/src/styles/section-banner.css';

interface BannerProps {
  imageUrl: string;
  altText: string;
}

const BannerSection: React.FC<BannerProps> = ({ imageUrl, altText }) => {
  return (
    <section className="section-banner">
      <img src={imageUrl} alt={altText} />
      <h1>Banner</h1>
    </section>
    
  );
};

export default BannerSection;
