import {memo} from "react"
const Button = ({value, btnClickHandler= () => {}, color="", icon=""}) => {
  return(
    <div className="btn-contaier">
        <button className={`btn ${color}`} onClick={btnClickHandler}>{icon}{value}</button>
    </div>
  )
}

export default memo(Button, (prevProps, nextProps) => {
  console.log(prevProps, nextProps)
})