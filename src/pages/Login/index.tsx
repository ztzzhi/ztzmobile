/*使用typescript开发react时候引入 *.module.less有所不同*/
const style = require('./index.module.css').default

export default function Index(){
  return(
    <>
      <div className={style.login}>Login <span className={style.name}>123</span></div>
      <div className={style.fa}>123</div>
    </>
  )
}