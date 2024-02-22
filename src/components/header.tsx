import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Header from './header.tsx';
import Footer from './footer.tsx';
import i18n   from './i18n.tsx';  

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="App">
      { }
      <Header toggleLanguage={toggleLanguage} />
      <Footer />
    </div>
  );
}

export default App;
