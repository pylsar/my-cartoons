import React from 'react'

import Button from '../Button/Button'

import './AboutWaltDisney.scss'

class AboutWaltDisney extends React.Component {

    state={
        show: false
    }

    moreClick = () =>{
        this.setState({
            show: !this.state.show
        })
    }


    render(){

        const more = this.state.show && <div className="aboutBox__more"></div>

        return (
            <div className="aboutBox">
                <div className="aboutBox__header">
                <h1>Walt Disney</h1>
                </div>  
                <p>The Walt Disney Company — один из крупнейших конгломератов индустрии развлечений в мире. Основанная 16 октября 1923 года братьями Уолтером и Роем Диснеями как небольшая анимационная студия, в настоящее время является одной из крупнейших голливудских студий, владельцем 11 парков развлечений и двух аквапарков, а также нескольких сетей телерадиовещания, к числу которых относится американская телерадиовещательная компания (Эй-Би-Си).</p>
                <p>Штаб-квартира компании Уолта Диснея и основные производственные мощности сосредоточены в подразделении Disney Studios (студия Уолта Диснея) в городе Бербанк, штат Калифорния, США.</p>
                <p>Компания Уолта Диснея входит в промышленный индекс Доу-Джонса. Рыночная капитализация на ноябрь 2019 года — 240 млрд долларов.</p>
                {more}
                <Button onClick={this.moreClick} buttonName="Подробнее"/>
                <Button buttonName="Премии"/>
                <Button buttonName="топ"/>
            </div>
        )
    }    
}

export default AboutWaltDisney
