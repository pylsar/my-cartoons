import React from 'react'

import Button from '../../Button/Button'
import MultChoose from '../../MultChoose/MultChose'

import './Turtles.Ninja.scss'
import NinjaImg from '../../../assets/img/ninja turtles.png'

class TurtlesNinja extends React.Component {

    state={
        cardShow: false
    }

    cardHandleClick = () => {
        this.setState({
            cardShow: !this.state.cardShow
        })
    }

    render(){
        return (
            <div className="miniCard">
                <div className="miniCard__card">
                    <h2 className="miniCard--title">Черепашки ниндзя</h2>
                    <img src={NinjaImg} alt="черепашки ниндзя"></img>
                    <Button className="miniCard__btn"
                        buttonName={this.state.cardShow ? '<< Вернуть как было' : 'Подробнее >>'}
                        onClick={this.cardHandleClick}
                    />
                </div>    

                {this.state.cardShow && 
                    <div class="miniCard__hide">
                        <ul>
                            <li>Имя: Леонардо</li>
                            <li>Оружие: катана</li>
                            <li>Цвет повязки: синий</li>
                            <li>Репутация: лидер</li>
                            <li>Прозвище: Лео</li>
                        </ul>
                        <span>Леонардо — спокойный, дисциплинированный, хорошо воспитанный и непреклонный в решениях лидер. У него особо теплые отношения с его учителем мастером Сплинтером, и больше свободного времени проводит на тренировках или за медитацией. Если с семьёй случится что-то ужасное, он будет винить себя. </span>
                </div>
                }
                <div className="miniCard__choose">
                    <ul>
                        <MultChoose />
                    </ul> 
                </div>    
            </div>
        )
    }
    
}

export default TurtlesNinja
