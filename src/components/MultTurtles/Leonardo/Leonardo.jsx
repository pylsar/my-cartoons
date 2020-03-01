import React from 'react'

import TurtleList from '../TurtleList/TurtleList'
import TurtleTitle from '../TurtleTitle/TurtleTitle'

import '../MultTurtles.scss'
import leonardoBigIcon from '../../../assets/img/leonardoBig.png'

const Leonardo = () => {
    return (
        <div className="turtle">
            <div className="turtle__box">
                <TurtleTitle title="Леонардо" />
                <img class="turtle__img" src={leonardoBigIcon} alt="Леонардо"/>
                <div className="turtle__box__content">
                    <ul>
                        < TurtleList name="имя: Леонардо"/>
                        < TurtleList name="прозвище: Лео"/>
                        < TurtleList name="любимое оружие: катана" />
                        < TurtleList name="цвет банданы: синий"/>
                    </ul>
                    <div className="turtle__box__text">
                        <p>Леонардо — спокойный, дисциплинированный, хорошо воспитанный и непреклонный в решениях лидер. У него особо теплые отношения с его учителем мастером Сплинтером, и больше свободного времени проводит на тренировках или за медитацией. Если с семьёй случится что-то ужасное, он будет винить себя</p>
                        <p>Леонардо — сильнейшая из черепах в обращении с оружием и врукопашную. В основном из-за того, что полагается на свои чувства, думает в сражениях и проводит больше всех времени за тренировками.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leonardo
