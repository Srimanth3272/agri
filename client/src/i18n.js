import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "products": "Products",
      "about": "About",
      "welcome": "Welcome to AgriNexa",
      "tagline": "Bridging Fields. Connecting Nations.",
      "explore": "Explore Products"
    }
  },
  te: {
    translation: {
      "home": "హోమ్",
      "products": "ఉత్పత్తులు",
      "about": "మా గురించి",
      "welcome": "AgriNexa కు స్వాగతం",
      "tagline": "పొలాలను అనుసంధానిస్తూ. దేశాలను కలుపుతూ.",
      "explore": "ఉత్పత్తులను అన్వేషించండి"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
