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
