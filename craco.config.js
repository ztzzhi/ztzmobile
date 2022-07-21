const CracoLessPlugin = require("craco-less")
const path = require("path")

module.exports = {
    webpack: {
        // 配置别名
        alias: {
            // 约定：使用 @ 表示 src 文件所在路径
            "@": path.resolve(__dirname, "src")
        }
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {

                        },
                        javascriptEnabled: true
                    }
                }
            }
        },
    ],
    style: {
        postcss: {
            mode: "extends",
            loaderOptions: {
                postcssOptions: {
                    ident: "postcss",
                    plugins: [
                        [
                            "postcss-px-to-viewport-8-plugin",
                            {
                                viewportWidth: 750, // 设计稿的视口宽度
                            },
                        ],
                    ],
                },
            },
        },
    },
}
