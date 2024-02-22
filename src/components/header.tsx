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
      <nav>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
      <div className="language-buttons">
        <button onClick={() => toggleLanguage()}>
          <img src="/src/images/usa-flag.png" alt="English Flag" />
        </button>
        <button onClick={() => toggleLanguage()}>
          <img src="/src/images/brazil-flag.png" alt="Portuguese Flag" />
        </button>
        {/* Adicione botões adicionais conforme necessário */}
      </div>
    </header>
  );
};

export default Header;
