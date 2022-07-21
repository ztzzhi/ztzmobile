export let ws: any
// WebSocket实例创建
export function createWebsocket() {
  // 实例化
  ws = new WebSocket("ws://localhost:8989?id=MDQ6VXNlcjE=")

  // 连接函数
  ws.onopen = function (event: any) {
    console.log("Connection open ...", event)
  }
  // 信息接受函数
  ws.onmessage = function (evt: any) {
    console.log(evt.data, " evt.data,")
  }

  ws.onclose = function () {
    console.log("Connection closed.")
  }
}
createWebsocket()

setTimeout(() => {
  ws.send(
    JSON.stringify({
      to: "xxx",
      from: "xxx",
      msg: "你好啊"
    })
  )
}, 2000)
