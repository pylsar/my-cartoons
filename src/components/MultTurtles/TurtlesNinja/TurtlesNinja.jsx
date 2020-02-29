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
                        <p>Вымышленная команда из четырёх черепах-мутантов, которые обучаются искусству ниндзюцу со своим сэнсэем, крысой-мутантом, мастером Сплинтером. Устроив свою базу в канализации Нью-Йорка, они сражаются со злом на улицах города.Права на черепашек-ниндзя с 1987 по 1989 год принадлежали Кевину Истмену и Питеру Лэрду, с 2001 по 2009 год — Питеру Лэрду, с 2009 — Nickelodeon Animation Studio.</p>
                        <p>Их создали два художника — Кевин Истмен и Питер Лэрд.Осенью 2009 года права на персонажей комиксов о черепашках-ниндзя были выкуплены телеканалом «Никелодеон».</p>
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
