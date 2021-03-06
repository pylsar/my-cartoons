import React, {useState, Fragment} from 'react'
import PropTypes from 'prop-types'

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
            {title==="Подробнее" || title==='Премии' ? <p>Больше информации можно получить на сайте википедия, нажав на ссылку ниже</p> : <p>Перейдя по ссылке ниже, вы увидите список ток 15 мультфильмов от компании walt disney</p>}
            <a className="aboutBox__more--link" href={link} rel="noopener noreferrer" target="_blank"><span>к</span><span>л</span><span>и</span><span>к</span></a>
        </div>
        )}  
        </Fragment>
    )
}


AboutBox.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default AboutBox
