// App.tsx
import React, { useState, useEffect } from 'react';

import '/src/styles/app.css';
import { useTranslation } from 'react-i18next';
import Header             from './components/header';
import Footer             from './components/footer';
import Sectionbanner            from './components/section-banner';   
import SectionContext     from './components/section-context'; 
import SectionContextOne  from './components/section-context-one';  
import SectionContextTwo  from './components/section-context-two';  
import i18n               from './i18n';

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const { t } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  return (
    <div className="App">
      <Header toggleLanguage={toggleLanguage} t={t} />
      <Sectionbanner imageUrl="../logo.png" altText="Banner Alt Text" />
      <SectionContext title={'Section'} description={'Section Context'} />
      <SectionContextOne title={'Section One'} description={'Section Context One '} />
      <SectionContextTwo title={'Section two'} description={'Section Context two '} />
      <Footer />
    </div>
  );
};

export default App;
