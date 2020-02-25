import React from 'react'

import Button from '../../Button/Button'

import './Turtles.Ninja.scss'

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
                    <h2 className="miniCard--title">clock</h2>
                    <img src="https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=""></img>
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

                
            </div>
        )
    }
    
}

export default TurtlesNinja
