//@ts-ignore
import Image from "./404_error.png"
//@ts-ignore
import style from "./index.module.less"
import { useNavigate } from "react-router-dom"
import { Button } from "antd"

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
          <h2 className={style.title}>PAGE NOT FOUND</h2>
          <h3 className={style.desc}>WE COULDN’T FIND THIS PAGE</h3>
          <Button
            className={style.backBtn}
            size="large"
            type="dashed"
            ghost
            onClick={handleGoBack}
          >
            返回上一页
          </Button>
        </div>
      </div>
    </>
  )
}
