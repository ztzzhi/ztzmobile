module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "react-vant",
        libraryDirectory: "es",
        // 指定样式路径
        style: name => `${name}/style/less`
      },
      "react-vant"
    ]
  ]
}
