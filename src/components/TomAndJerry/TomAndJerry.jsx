import React from 'react'
import {Link} from 'react-router-dom'

import './TomAndJerry.scss'
import TomIcon from '../../assets/img/tom.png'
import JerryIcon from '../../assets/img/jerry.png'

const TomAndJerry = () => {
    return (
        <div className='taj'>
            <h1 className="taj__title">
                <span class="taj__title--text">Том и Джерри</span>
                <span class="taj__title--subtext">Уильям Ханна и Джозеф Барбара</span>
            </h1>
            <div className="taj__box">
                <Link to="/taj/tom"><img src={TomIcon} alt="Tom"/></Link>
                <Link to="/taj/jerry"><img src={JerryIcon} alt="Jerry"/></Link>
            </div>    
        </div>
    )
}

export default TomAndJerry
