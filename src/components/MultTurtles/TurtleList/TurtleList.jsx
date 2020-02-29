import React from 'react'

import './TurtleList.scss'

const TurtleList = ({name}) => {
    return <li className="turtle-list">{name}</li>
}

export default TurtleList