import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en-US.json';
import pt from './locales/pt-BR.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'en-US': { translation: en },
      'pt-BR': { translation: pt },
    },
    lng: 'en-US',
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
