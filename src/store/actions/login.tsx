import { TOKEN_CHANGE } from "../constant"

export const changeTokenAction = (payload: { token: string }) => {
  return { type: TOKEN_CHANGE, data: payload }
}
