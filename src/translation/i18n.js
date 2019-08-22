import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationFR from './fr_FR/app.json';
import translationEN from './en_EN/app.json';
import translationES from './es_ES/app.json';


i18n
    .use(initReactI18next)
    .init({
        resources: {
            fr: {
                app: translationFR
            },
            en: {
                app: translationEN
            },
            es: {
                app: translationES
            }
        },

        lng: "fr",
        fallbackLng: "fr", // use en if detected lng is not available

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        },

        // react-i18next options
        react: {
            wait: true
        }
    });

export default i18n;