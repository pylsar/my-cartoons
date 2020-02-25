import React from 'react'
import PropTypes from 'prop-types'


import './Input.scss'

const Input = ({type, value, name, id, onChange}) => {
    return (
        <div className="input">
            <label htmlFor={id}>{name}</label>
            <input type={type} value={value} name={name} id={name} onChange={onChange}/>
        </div>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
     // необязательное свойство т.к. по умолчанию type="text" и его можно не заполнять
    type: PropTypes.string, 
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

Input.defaultProps = {
    value: '',
    onChange: () =>{}
}


export default Input
