import { LANGUAGE_CODE } from "../constant"

export interface userType {
  username: string
}

const initState: userType = {
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
