import React from 'react'

import TurtleList from '../TurtleList/TurtleList'
import TurtleTitle from '../TurtleTitle/TurtleTitle'

import '../MultTurtles.scss'
import rafaelBigIcon from '../../../assets/img/rafaelBig.png'

const Rafael = () => {
    return (
        <div className="turtle">
            <div className="turtle__box">
                <TurtleTitle title="Рафаель" />
                <img class="turtle__img" src={rafaelBigIcon} alt="Рафаель"/>
                <div className="turtle__box__content">
                    <ul>
                        < TurtleList name="имя: Рафаель"/>
                        < TurtleList name="прозвище: Раф"/>
                        < TurtleList name="любимое оружие: сай" />
                        < TurtleList name="цвет банданы: красный"/>
                    </ul>
                    <div className="turtle__box__text">
                        <p>Его бандана красного цвета, и он владеет парой сай. Рафаэль обычно довольно агрессивен, угрюм и настырен. Его назвали в честь Рафаэля Санти, художника времен Возрождения. Он является одним из старших братьев. Рафаэль — непоседа — всегда рвётся вперёд. День рождения Рафаэля 22 августа.</p>
                        <p>Рафаэля отличает буйный, нетерпеливый характер. Он не любит ждать и планировать, предпочитает сразу идти в лобовую атаку. Это также можно расценивать, как стремление Рафаэля принять на себя первый, самый болезненный удар. Если Черепашки встречаются с каким-либо новым противником. то можно не сомневаться — Рафаэль будет атаковать его первым. Причем он никогда не сдается и не любит убегать.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rafael
