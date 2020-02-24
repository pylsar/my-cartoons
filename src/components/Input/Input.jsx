import React from 'react'

import './Input.scss'

const Input = ({type, value, name, id}) => {
    return (
        <div className="input">
            <label htmlFor={id}>{name}</label>
            <input type={type} value={value} name={name} id={name}/>
        </div>
    )
}

export default Input
