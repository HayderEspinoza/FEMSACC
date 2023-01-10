import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './lang/es';

// translation
const resources = {
  es: {
    translation: es,
  },
};

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  lng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
