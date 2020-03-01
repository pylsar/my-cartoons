import React from 'react'
import PropTypes from 'prop-types'


const Button = ( {buttonName, onClick, className} ) => {
    return (
    <button 
    className={className}
    onClick={onClick}
    >{buttonName}</button>
    )
}

Button.propTypes = {
    buttonName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
}

Button.defaultProps = {
    onClick: () => {},
    className: '',
    buttonName: ''
}

export default Button
