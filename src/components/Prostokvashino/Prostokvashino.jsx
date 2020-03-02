import React from 'react'

import './Prostokvashino.scss'
import prosto1Icon from '../../assets/img/prosto1.png'
import prosto2Icon from '../../assets/img/prosto2.png'

class Prostokvashino extends React.Component {

    state={
        tabFedor: true,
        tabMatroskin: false,
        tabSharik: false
    }

    handleFedor = () => {
        this.setState({
            tabFedor: true,
            tabMatroskin: false,
            tabSharik: false
        })
    }

    handleMatroskin = () => {
        this.setState({
            tabFedor: false,
            tabMatroskin: true,
            tabSharik: false
        })
    }

    handleSharik = () => {
        this.setState({
            tabFedor: false,
            tabMatroskin: false,
            tabSharik: true
        })
    }

    render(){
        return (
            <div class="prosto">
                <h1>Трое из Простоквашино</h1>
                <div className="tabs">
                    <div className="tabs__item" onClick={this.handleFedor}>дядя Фёдор</div>
                    <div className="tabs__item" onClick={this.handleMatroskin}>Матроскин</div>
                    <div className="tabs__item" onClick={this.handleSharik}>Шарик</div>
                </div>
                {this.state.tabFedor ? 
                    <div>
                        <h2 className="prosto--title">дядя Фёдор</h2>
                        <div className="prosto__box">
                            <div>
                                <p>Дядя Фёдор — прозвище шестилетнего мальчика, которое он получил за то, что ведёт себя как взрослый: самостоятельно варит суп и рассуждает «поумнее некоторых академиков». Дядя Фёдор познакомился с говорящим бездомным котом, но родители не разрешили оставить его в квартире. Тогда Дядя Фёдор и кот, которому Дядя Фёдор, по его личной просьбе, присвоил фамилию Матроскин, уехали в деревню Простоквашино, где приняли в свою компанию пса Шарика и втроём поселились в одном из заброшенных домов.</p>
                                <p>Для Дяди Фёдора характерны следующие личные качества: рассудительность, стремление к независимости, любовь к природе и животным, настоящая хозяйственная жилка. Он символизирует протест против чрезмерного гнёта родителей</p>
                            </div>
                            <img src={prosto1Icon} alt="Простоквашино"/>
                        </div>
                    </div>
                : ''}
                {this.state.tabMatroskin ? 'кот' : ''}
                {this.state.tabSharik ? 'собака' : ''}

                

            </div>
        )
    }
}

export default Prostokvashino
