import React from 'react'

import './AboutBox.scss'
import closeIcon from '../../assets/img/close.svg'


const AboutBox = ( {title, link} ) => {

   


    return (
        <div className="aboutBox__more">
            <img src={closeIcon} alt="closeBtn"/>
            
            <h2>{title}</h2>
            {title==="Подробнее" || title==='Премии' ? 'Больше информации можно получить на сайте википедия, нажав на ссылку ниже' : 'Перейдя по ссылке ниже, вы увидите список ток 15 мультфильмов от компании walt disney'}
            <a href={link} rel="nofollow" target="_blank">тут</a>
        </div>
    )
}

export default AboutBox
