import { TOKEN_CHANGE } from "../constant"

export interface loginType {
  token: string
  time1?: string
}

const initState: loginType = {
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwOi8vNDcuOTguMTYwLjEyL2F1dGgvbG9naW4iLCJpYXQiOjE2NTY0NzEwMTEsImV4cCI6MTY1NzMzNTAxMSwibmJmIjoxNjU2NDcxMDExLCJqdGkiOiJURHlXYmxlWjNkMHFKRXFBIiwic3ViIjoie1wiaWRcIjoyLFwidXNlcm5hbWVcIjpcImFkbWluXCIsXCJ0eXBlXCI6MyxcIm9yZ19pZFwiOjF9IiwicHJ2IjoiZjZiNzE1NDlkYjhjMmM0MmI3NTgyN2FhNDRmMDJiN2VlNTI5ZDI0ZCJ9.Yx9WRtaLdya9xI6qUfNZcZSUDjiyzZih-Qg_fHU36u2yBy88vixY8sqAMR-vgXbqJpozuxBqJpkNtyYrW2eHyw",
  time1: "12345"
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
