import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/header';
import Footer from './components/footer';
import i18n from './i18n'; // Importe o arquivo de configuração i18n

const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="App">
      {/* Passe a função toggleLanguage para o Header */}
      <Header toggleLanguage={toggleLanguage} />
      <Footer />
    </div>
  );
}

export default App;
