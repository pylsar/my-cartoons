import React from 'react'

import './AboutMarvel.scss'
import marvelIcon from '../../assets/img/marvel.jpg'

const AboutMarvel = () => {
    return (
        <div className="marvel">
            <div className="marvel__box">
                <img src={marvelIcon} alt="Marvel"/>
                <h1>Marvel</h1>
            </div>
                <div className="marvel__left">
                123
                </div>
                <div className="marvel__right">
                sdf
                </div>
                <div className="marvel__text">
                    <p>Американская компания, издающая комиксы, подразделение корпорации Marvel Entertainment. Получившая среди поклонников комиксов прозвище «Дом идей». Большинство персонажей комиксов Marvel обитают в одной вымышленной вселенной, получившей название Земля-616.</p>
                    <p>В конце августа 2009 года компания The Walt Disney Company объявила о покупке Marvel. Сделка состоялась в конце декабря 2009 года, и её цена составила $4,24 миллиарда.</p>
                </div>
        </div>  
    )
}

export default AboutMarvel
