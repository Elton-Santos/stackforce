import React from 'react';
import '/src/styles/section-banner.css';

interface BannerProps {
  imageUrl: string;
  altText: string;
}

const BannerSection: React.FC<BannerProps> = ({ imageUrl, altText }) => {
  return (
    <section className="section-banner">      
      <div className="div_banner_one">
        <span><b>What is Lorem Ipsum?</b></span>      
        <p>
          <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of 
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
          software like Aldus.
        </p>
      </div>

      <div className="div_banner_two">
        <span><b>Where does it come from?</b></span>
        <p>
            <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen book. It has survived 
            not only five centuries, but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
            Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.
          </p>
      </div>
      
    </section>
    
  );
};

export default BannerSection;
