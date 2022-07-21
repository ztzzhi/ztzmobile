//@ts-ignore
import Image from "./401_error.png"
//@ts-ignore
import style from "./index.module.less"
import { useNavigate } from "react-router-dom"
import { Button } from "react-vant"

export default function Index() {
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }
  return (
    <>
      <div className={style["error-page"]}>
        <div className={style.errorWarp}>
          <div className={style.image}>
            <img src={Image} />
          </div>
          <h2 className={style.title}>No Access</h2>
          <h3 className={style.desc}>
            You Do Not Have Permission To Access This Page
          </h3>
          <Button className={style.backBtn} size="large" onClick={handleGoBack}>
            返回上一页
          </Button>
        </div>
      </div>
    </>
  )
}
