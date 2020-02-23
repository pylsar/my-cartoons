import React, {useState, Fragment} from 'react'

import './AboutBox.scss'
import closeIcon from '../../assets/img/close.svg'


const AboutBox = ( {title, link} ) => {

    const [isModalOpen, setIsModalOpen] = useState(true);



    return (
        <Fragment>
        {isModalOpen && (
        <div className="aboutBox__more">
            <img onClick={ () => setIsModalOpen(false) } src={closeIcon} alt="closeBtn"/>
            
            <h2>{title}</h2>
            {title==="Подробнее" || title==='Премии' ? 'Больше информации можно получить на сайте википедия, нажав на ссылку ниже' : 'Перейдя по ссылке ниже, вы увидите список ток 15 мультфильмов от компании walt disney'}
            <a className="aboutBox__more--link" href={link} rel="nofollow" target="_blank">клик</a>
        </div>
        )}  
        </Fragment>
    )
}

export default AboutBox
