const Button = ({value, btnClickHandler= () => {}, }) => {
  return(
    <div className="btn-contaier">
        <button className="btn" onClick={btnClickHandler}>{value}</button>
    </div>
  )
}

export default Button;