//存放公共api方法
import { postRequest } from "../utils/request"

// 公共图片上传 (不需要token验证)
export const imageUpload = (data: any) => postRequest("/upload/image", data)

// 公共excel文件上传 (不需要token验证)
export const excelUpload = (data: any) => postRequest("/upload/excel", data)

// 公共excel文件导入 (不需要token验证)
export const excelImport = (data: any) => postRequest("/upload/import", data)
