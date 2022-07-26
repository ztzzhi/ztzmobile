import { getRequest, postRequest } from "../utils/request"

export const getnewsType = () => getRequest(`v1/news/newstype`)

export const getnewsList = (type: any) =>
  getRequest(`v1/news/newslist?type=` + type)
