const Input = ({type="text", placeholder="", value , OnChange= () => {}, handleOnFocus= () => {}, handleOnBlur= () => {}}) => {
    return(
        <div className="input-container">
            <input className="input" type={type} placeholder={placeholder} value={value} onChange={OnChange} /> 
        </div>
    )
}
export default Input;