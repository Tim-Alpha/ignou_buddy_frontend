import React from "react";

const CustomInput = ({label, type, className, placeholder, value, onChange}) => {
    return(
        <div className="form-group">
        <label>{label}</label>
        <input 
            type={type}
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
        </div>
    )
}

export default CustomInput;