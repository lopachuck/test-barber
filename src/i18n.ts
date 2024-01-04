import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEN from './assets/locales/en/translation.json'
import translationEST from './assets/locales/est/translation.json'
import translationRU from './assets/locales/ru/translation.json'
import translationUKR from './assets/locales/ukr/translation.json'

const resources = {
    eng: {
        translation: translationEN,
    },
    est: {
        translation: translationEST,
    },
    ru: {
        translation: translationRU,
    },
    ukr: {
        translation: translationUKR,
    },
}

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'eng', // if there are no matches use this to try to solve
        lng: 'eng', // default lang
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: resources,
        react: { useSuspense: false },
    })

export default i18n