import React from 'react';
import { useTranslation } from 'react-i18next';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = (lang : string) => {
    localStorage.setItem('lng', lang);
    i18n.changeLanguage(lang);
  }

  return (
    <header>
      <div className="logo">
        <img src="/src/images/logo.png" alt="Logo" />
      </div>

      <nav className="et-menu-nav">
        <ul id="menu-menu-v2-en" className="et-menu nav">
          <li className="">
            <a href="" aria-current="page">{t('home')}</a>
          </li>

          <li className="">
            <a href="">{t('about')}</a>
          </li>

          <li className="">
            <a href="">{t('contact')}</a>
          </li>

          <li className="">
            <div className="language-buttons">
              <button onClick={() => toggleLanguage('en-US')}>
                <img src="/src/images/usa-flag.png" alt="English Flag" />
              </button>
              <button onClick={() => toggleLanguage('es-ES')}>
                <img src="/src/images/spain-flag.png" alt="Spanish Flag" />
              </button>
              <button onClick={() => toggleLanguage('pt-BR')}>
                <img src="/src/images/brazil-flag.png" alt="Portuguese Flag" />
              </button> 
            </div>
          </li>
        </ul>
      </nav> 
    </header>

  );
};

export default Header;
