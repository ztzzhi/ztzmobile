import { LANGUAGE_CODE } from "../constant"

export interface loginType {
  username: string
}

const initState = {
  username: "ztz"
}
export default function userReducer(preState = initState, action: any) {
  const { type, data } = action
  let newState
  switch (type) {
    case LANGUAGE_CODE:
      newState = { ...initState, username: data.username }
      break
    default:
      newState = preState
      break
  }
  return newState
}
