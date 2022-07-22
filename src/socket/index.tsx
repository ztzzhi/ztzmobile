export let ws: any
// WebSocket实例创建
const userinfo = window.sessionStorage.getItem("userinfo")
  ? JSON.parse(window.sessionStorage.getItem("userinfo") as any)
  : {}

export function createWebsocket() {
  // 实例化
  window.sessionStorage.getItem("userinfo")
  ws = new WebSocket(`ws://localhost:9000?id=${userinfo.node_id}`)
  // 连接函数
  ws.onopen = function (event: any) {
    console.log("Connection open ...", event)
  }
  // 信息接受函数
  ws.onmessage = function (evt: any) {
    if (evt.data) {
      const { messageList } = JSON.parse(evt.data)
      window.sessionStorage.setItem("usermessage", JSON.stringify(messageList))
    }
  }

  ws.onclose = function () {
    console.log("Connection closed.")
  }
}
createWebsocket()
