import { TOKEN_CHANGE } from "../constant"

export const changeTokenAction = (payload: any) => {
  return { type: TOKEN_CHANGE, data: payload }
}
