import React from 'react'

import './Input.scss'

const Input = ({type, value, name, id, onChange}) => {
    return (
        <div className="input">
            <label htmlFor={id}>{name}</label>
            <input type={type} value={value} name={name} id={name} onChange={onChange}/>
        </div>
    )
}

export default Input
