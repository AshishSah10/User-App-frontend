const Input = ({type="text", placeholder="", handleOnChange= () => {}, handleOnFocus= () => {}, handleOnBlur= () => {}}) => {
    return(
        <div className="input-container">
            <input className="input" type={type} placeholder={placeholder} onChange={handleOnChange} /> 
        </div>
    )
}

export default Input;