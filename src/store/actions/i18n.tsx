import { LANGUAGE_CHANGE } from "../constant"

export const changeLanguageAction = (payload: string) => {
  return { type: LANGUAGE_CHANGE, data: payload }
}
