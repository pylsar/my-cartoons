import React from 'react'

import './AboutSoyuzMult.scss'
import rabbitIcon  from '../../assets/img/rabbit.png'
import wolfIcon from '../../assets/img/wolf.png'

const AboutSouzMult = () => {
    return (
        <div className="union">
            <img className="union__rabbit" src={rabbitIcon} alt="заяц"/>
            <img className="union__wolf" src={wolfIcon} alt="волк"/>
            <div className="union__box">
                <div className="union__box__top">
                    <p>Киностудия создана 10 июня 1936 года под названием «Союздетмультфильм»</p>
                    <p>20 августа 1937 года киностудию переименовали в «Союзмультфильм».</p>
                    <p>С 1937 года студия начинает снимать цветные фильмы</p>   
                </div>
                <div className="union__box__bottom">
                    <p>В послевоенное время идеологические кампании 1946—1953 годов, в том числе «борьба с диснеевщиной», покончили с прямыми заимствованиями приёмов из американских кинообразцов и определили самобытный эстетический «канон» советского детского мультфильма.</p>
                    <p>В начале 1960-х годов, в годы «хрущёвской оттепели», резко увеличивается выпуск сатирических мультфильмов.</p>
                    <p>В 1970—1980 годы «Союзмультфильм» считается крупнейшей анимационной студией в Европе</p> 
             </div>
            </div>
        </div>
    )
}

export default AboutSouzMult
