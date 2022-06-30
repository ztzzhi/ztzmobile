import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import zhJson from "./zh.json"
import enJson from "./en.json"

const resources = {
  en: {
    translation: zhJson
  },
  zh: {
    translation: enJson
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: "zh",
  // keySeparator: false,
  interpolation: { escapeValue: false }
})

export default i18n
