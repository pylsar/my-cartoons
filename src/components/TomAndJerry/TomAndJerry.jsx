import React from 'react'

import './TomAndJerry.scss'
import TomIcon from '../../assets/img/tom.png'
import JerryIcon from '../../assets/img/jerry.png'

const TomAndJerry = () => {
    return (
        <div className='taj'>
            <h1>Tom And Jerry</h1>
            <div className="taj__box">
                <img src={TomIcon} alt="Tom"/>
                <img src={JerryIcon} alt="Jerry"/>
            </div>    
        </div>
    )
}

export default TomAndJerry
