import React from 'react';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleLanguage }) => {
  const { t, i18n } = useTranslation();

  return (
    <header>
      <div className="logo">
        <img src="/src/images/logo.png" alt="Blog Logo" />
      </div>

      <nav className="et-menu-nav">
        <ul id="menu-menu-v2-en" className="et-menu nav">
          <li className="">
                <a href="" aria-current="page">Home</a>
          </li>

          <li className="">
            <a href="">About us</a>
          </li>

          <li className="">
              <a href="">Contact</a>
          </li>

          <li className="">
            <div className="language-buttons">
              <button onClick={() => toggleLanguage()}>
                <img src="/src/images/usa-flag.png" alt="English Flag" />
              </button>
              <button onClick={() => toggleLanguage()}>
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
