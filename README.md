### `npm start`

### `npm test`

### `npm run build`


### 坑1 
/*使用typescript开发react时候引入 *.module.less有所不同*/

### 坑2
declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

### 坑3 配置别名@指向src目录
1.修改craco.config.js 文件
2.创建 path.tsconfig.json 文件 
3.配置tsconfig.json 文件

### 坑4 利用反向注入获取function的返回值类型
一般用于获取store的所有state类型

### 坑5 规范 useSelector中的类型
const loginState = useSelector(state => state.login) //对象的类型为 "unknown"。
改为
const loginState = useSelector<RootState, loginType>(state => state.login)

### 坑6 像window setTimeout 这种容易出现 eslint 处理 is not defined 的错误
"globals": {
    "document": true,
    "localStorage": true,
    "window": true,
    "setTimeout": true,
    "console": true,
  }

### 坑7 修改默认滚动条 自定义效果更佳
考虑到原生滚动条的效果不佳 会有阴影 体验不是很好 所以采用自定义效果

::-webkit-scrollbar
::-webkit-scrollbar-thumb