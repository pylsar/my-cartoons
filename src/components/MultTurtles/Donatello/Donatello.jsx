import React from 'react'

import TurtleTitle from '../TurtleTitle/TurtleTitle'
import TurtleList from '../TurtleList/TurtleList'

import donatelloBigIcon from '../../../assets/img/donatelloBig.png'
import '../MultTurtles.scss'

const Donatello = () => {
    return (
        <div className="turtle">
            <div className="turtle__box">
                <TurtleTitle title="Донателло" />
                <img class="turtle__img" src={donatelloBigIcon} alt="Донателло"/>
                <div className="turtle__box__content">
                    <ul>
                        < TurtleList name="имя: Донателло"/>
                        < TurtleList name="прозвище: Дони"/>
                        < TurtleList name="любимое оружие: шест" />
                        < TurtleList name="цвет банданы: сиреневый"/>
                    </ul>
                    <div className="turtle__box__text">
                        <p>Мозг и разум команды. В Mirage/Image у всех черепашек красные банданы, но в остальных версиях его бандана фиолетового цвета. День рождения Донателло 16 июня. Его фирменное оружие шест Бо. Донателло изображен как самый умный из Черепашек-ниндзя, часто говорит на научном жаргоне и имеет страсть к науке и механике. Донателло предпочитает решать проблемы без применения силы (что редко удается). Его назвали в честь Донателло, скульптора эпохи Возрождения.</p>
                        <p>Донателло почти всегда находится в команде, потому что он легко убеждаем и безотказен. Имеет весьма тонкое чувство юмора, что позволяет ему не только помогать и поддерживать братьев в трудную минуту своими знаниями, но к тому же цеплять их и показывать своё превосходство.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donatello