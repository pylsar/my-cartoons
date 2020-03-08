import React from 'react'
import PropTypes from 'prop-types'

import './TurtleList.scss'

const TurtleList = ({name}) => {
    return <li className="turtle-list">{name}</li>
}


TurtleList.propTypes = {
    name: PropTypes.string.isRequired
}

export default TurtleList