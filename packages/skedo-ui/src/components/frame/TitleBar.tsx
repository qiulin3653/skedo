import style from  "./frame.module.scss"

interface RouteProps {
  src : string,
  active? :boolean,
  path ? : string
}

const Route = ({ src, active, path }: RouteProps) => {
  return (
    <div onClick={e => {
      if(path) {
        window.location.href = path
      }
    }} className={style.btn + " " + (active ? style.active : '')}>
      <img src={src} alt="" />
    </div>
  )
}

const TitleBar = ({pageName, name} : {
  pageName : string,
  name : string
}) => {
  return (
    <header className={style.titlebar}>
      <h2>SKEDO</h2>
      <div className={style.router}>
        <Route
          active={name === "skedo"}
          path={`/skedo/${pageName}`}
          src="https://voice-static.oss-accelerate.aliyuncs.com//img/901888239b96b6f1d39ce060cc0b57009236bfa3.png"
        />
        <Route
          active={name === "codeless"}
          src="https://voice-static.oss-accelerate.aliyuncs.com//img/8ff6fd7149b9def759a1f1c6760ac1beaf18557d.png"
        />
        <Route
          active={false}
          src="https://voice-static.oss-accelerate.aliyuncs.com//img/7d614228eaaa473246435d58e5c51700732d88f8.png"
        />
        <Route
          active={name === "preview"}
          path={"/preview/" + pageName}
          src="https://voice-static.oss-accelerate.aliyuncs.com//img/7ced72ba49b0a9514f7c22606ad87e21eb56c2ed.png"
        />
        <Route src="https://voice-static.oss-accelerate.aliyuncs.com//img/7e463508667bfc093130e8cd84690c12396cc2c2.png" />
      </div>
    </header>
  )
}

export default TitleBar