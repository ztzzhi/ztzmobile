import { LANGUAGE_CHANGE } from "../constant"
import i18n from "i18next"
// import moment from "moment"

export interface i18nType {
  language: string
}

const initState: i18nType = {
  language: "zh"
}

export default function i18nReducer(preState = initState, action: any) {
  const { type, data } = action
  let newState
  switch (type) {
    case LANGUAGE_CHANGE:
      newState = { ...initState, language: data }
      i18n.changeLanguage(data)
      break
    default:
      newState = preState
      break
  }

  return newState
}
