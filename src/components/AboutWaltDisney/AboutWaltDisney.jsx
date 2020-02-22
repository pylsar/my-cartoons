import React from 'react'

import Button from '../Button/Button'
import AboutBox from '../AboutBox/AboutBox'

import './AboutWaltDisney.scss'

class AboutWaltDisney extends React.Component {

    state={
        more: false,
        prize: false,
        top: false
    }

    moreClick = () =>{
        this.setState({
            more: !this.state.more
        })
    }

    prizeClick = () =>{
        this.setState({
            prize: !this.state.prize
        })
    }

    topClick = () =>{
        this.setState({
            top: !this.state.top
        })
    }


    render(){

        const more = this.state.more && <div><AboutBox 
        title="Подробнее"
        link="https://ru.wikipedia.org/wiki/The_Walt_Disney_Company"
        />
        </div>
        const prize = this.state.prize && <div><AboutBox 
        title="Премии"
        link="https://ru.wikipedia.org/wiki/Список_наград_и_номинаций_Уолта_Диснея_на_премию_«Оскар»"
        />
        </div>
        const top = this.state.top && <div><AboutBox 
        title="Топ"
        link="https://way2day.com/article/multfilmy-disnej-top-15-luchshih-multikov.html"
        />
        </div>

        return (
            <div className="aboutBox">
                <div>
                    <div className="aboutBox__header">
                    <h1>Walt Disney</h1>
                    </div>  
                    <p>The Walt Disney Company — один из крупнейших конгломератов индустрии развлечений в мире. Основанная 16 октября 1923 года братьями Уолтером и Роем Диснеями как небольшая анимационная студия, в настоящее время является одной из крупнейших голливудских студий, владельцем 11 парков развлечений и двух аквапарков, а также нескольких сетей телерадиовещания, к числу которых относится американская телерадиовещательная компания (Эй-Би-Си).</p>
                    <p>Штаб-квартира компании Уолта Диснея и основные производственные мощности сосредоточены в подразделении Disney Studios (студия Уолта Диснея) в городе Бербанк, штат Калифорния, США.</p>
                    <p>Компания Уолта Диснея входит в промышленный индекс Доу-Джонса. Рыночная капитализация на ноябрь 2019 года — 240 млрд долларов.</p>
                    {more}
                    {prize}
                    {top}
                </div>
                <div className="aboutBox__buttons">
                    <Button onClick={this.moreClick} buttonName="Подробнее"/>
                    <Button onClick={this.prizeClick} buttonName="Премии"/>
                    <Button onClick={this.topClick} buttonName="топ"/>
                </div>    
            </div>
        )
    }    
}

export default AboutWaltDisney
