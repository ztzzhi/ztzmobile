import { combineReducers } from "redux"

import login from "./login"
import user from "./user"
import i18n from "./i18n"

export default combineReducers({
  login,
  user,
  i18n
})
