import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/header';
import Footer from './components/footer';
import i18n from './i18n';

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
      <Footer />
    </div>
  );
};

export default App;
