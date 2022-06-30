import { TOKEN_CHANGE } from "../constant"

export interface loginType {
  token: string
}

const initState = {
  token: "xxx"
}

export default function loginReducer(preState = initState, action: any) {
  const { type, data } = action
  let newState
  switch (type) {
    case TOKEN_CHANGE:
      newState = { ...initState, token: data.token }
      break
    default:
      newState = preState
      break
  }
  return newState
}
