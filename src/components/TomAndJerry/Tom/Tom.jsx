import React from 'react'

import '../TaJCard.scss'
import TomIcon from '../../../assets/img/tom.png'

const Tom = () => {
    return (
        <div className="tajCard">
            <img src={TomIcon} alt="Томас"/>
            <div className="tajCard__box">
                <p>В первом мультфильме «Puss Gets the Boot» кота называют Джаспер</p> 
                <p>Cо следующего мультфильма «The Midnight Snack»называют — Томас</p>
                <p>Полное имя — Томас Джеймс Джаспер Патрик</p>
                <p>Типичным домашний кот — любит спать,есть, проявляет интерес к кошечкам.</p>
                <p>Ловлей мышей — занимается редко и неохотно</p>
                <p>За Джерри он гоняется почти что всегда</p>
            </div>
        </div>
    )
}

export default Tom
