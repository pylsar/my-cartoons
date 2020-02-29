import React from 'react'

import TurtleList from '../TurtleList/TurtleList'
import TurtleTitle from '../TurtleTitle/TurtleTitle'

import './Leonardo.scss'
import leonardoBigIcon from '../../../assets/img/leonardoBig.png'

const Leonardo = () => {
    return (
        <div className="turtle">
            <div className="turtle__box">
                {/* <h2 className="turtle--title">Леонардо</h2> */}
                <TurtleTitle title="Леонардо" />
                <img class="turtle__img" src={leonardoBigIcon} alt="Леонардо"/>
                <div className="turtle__box__content">
                    <ul>
                        < TurtleList name="имя: Леонардо"/>
                        < TurtleList name="прозвище: Лео"/>
                        < TurtleList name="любимое оружие: катана" />
                        < TurtleList name="цвет пояса: синий"/>
                    </ul>
                    <span>тут куча текста</span>
                </div>
            </div>
        </div>
    )
}

export default Leonardo
