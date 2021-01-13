import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-locize-backend'
import LastUsed from 'locize-lastused'
import Editor from 'locize-editor'
import appConfig from '../config/app_config'
import i18next from 'i18next'
const locizeOptions = {
  projectId: appConfig.locizeProjectId,
  apiKey: appConfig.locizeApiKey,
  referenceLng: 'en',
}

i18n
  // i18next-locize-backend
  // loads translations from your project, saves new keys to it (saveMissing: true)
  // https://github.com/locize/i18next-locize-backend
  .use(Backend)
  // locize-lastused
  // sets a timestamp of last access on every translation segment on locize
  // -> safely remove the ones not being touched for weeks/months
  // https://github.com/locize/locize-lastused
  .use(LastUsed)
  // locize-editor
  // InContext Editor of locize ?locize=true to show it
  // https://github.com/locize/locize-editor
  .use(Editor)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // lng: 'en',
    fallbackLng: 'en',
    debug: false,
    saveMissing: true,
    ns: ['translation', 'mam', 'communication'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    whitelist: ['de', 'en'],
    detection: {
      checkForSimilarInWhitelist: true,
    },
    backend: locizeOptions,
    locizeLastUsed: locizeOptions,
    editor: {
      ...locizeOptions,
      onEditorSaved: async (lng, ns) => {
        // reload that namespace in given language
        await i18n.reloadResources(lng, ns)
        // trigger an event on i18n which triggers a rerender
        // based on bindI18n below in react options
        i18n.emit('editorSaved')
      },
    },
    react: {
      bindI18n: 'languageChanged editorSaved',
    },
  })
export default i18n
