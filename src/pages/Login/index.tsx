import { useState } from "react";

/*使用typescript开发react时候引入 *.module.less有所不同*/

const style = require("./index.module.css").default;

export default function Index() {
  let [state, setState] = useState(0);
  return (
    <>
      <div className={style.login}>
        Login <span className={style.name}>123</span>
      </div>
      <div className={style.fa}>123</div>
      <div onClick={() => setState(state + 1)}>{state}</div>
    </>
  );
}
