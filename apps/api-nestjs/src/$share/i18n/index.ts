import * as i18next from 'i18next';
import enTrans from './messages/en';
import arTrans from './messages/ar';
import { als } from '../als';

i18next.init({
  resources: {
    en: {
      translation: enTrans,
    },
    ar: {
      translation: arTrans,
    },
  },
});

const translators = {
  en: i18next.getFixedT('en'),
  ar: i18next.getFixedT('ar'),
};

export const t = (...args: Parameters<i18next.TFunction>) => {
  const { lang } = als.getStore();

  return (translators[lang] || translators.en)(...args);
};
