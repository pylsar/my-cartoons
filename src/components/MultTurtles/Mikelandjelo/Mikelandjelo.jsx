import React from 'react'

import TurtleTitle from '../TurtleTitle/TurtleTitle'
import TurtleList from '../TurtleList/TurtleList'

import mikelandjeloBigIcon from '../../../assets/img/mikkiBig.png'
import '../MultTurtles.scss'

const Mikelandjelo = () => {
    return (
        <div className="turtle">
        <div className="turtle__box">
            <TurtleTitle title="Миккеланджело" />
            <img class="turtle__img" src={mikelandjeloBigIcon} alt="Миккеланджело"/>
            <div className="turtle__box__content">
                <ul>
                    < TurtleList name="имя: Миккеланджело"/>
                    < TurtleList name="прозвище: Майки"/>
                    < TurtleList name="любимое оружие: нун чаки" />
                    < TurtleList name="цвет банданы: оранжевый"/>
                </ul>
                <div className="turtle__box__text">
                    <p>Его бандана оранжевого цвета, оружие — нунчаки; хотя иногда он использует и другие типы парного оружия (как например цепляющие крюки). Носит имя художника эпохи Возрождения Микеланджело Буонароти. Микеланджело — душа компании — самый энергичный из всех. Больше всех обожает пиццу.</p>
                    <p>Майки — самая весёлая черепашка в своей семье. Также наиболее легкомысленен. Сменил множество работ. В основном, работал организатором детских вечеринок. Благодаря этому он заполучил прозвище «Вечериночный Чувак»</p>
                    <p>Мастерски владеет нунчаками, хотя иногда предпочитает цепи с крюками.</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Mikelandjelo
