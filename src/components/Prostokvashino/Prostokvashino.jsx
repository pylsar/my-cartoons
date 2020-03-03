import React from 'react'

import './Prostokvashino.scss'
import prosto1Icon from '../../assets/img/prosto1.png'
import prosto2Icon from '../../assets/img/prosto2.png'
import prosto3Icon from '../../assets/img/prosto3.png'

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
                    <div className="tabs__item" onClick={this.handleMatroskin}>кот Матроскин</div>
                    <div className="tabs__item" onClick={this.handleSharik}>Шарик</div>
                </div>
                {this.state.tabFedor ? 
                    <div>
                        <h2 className="prosto--title">дядя Фёдор</h2>
                        <div className="prosto__box">
                            <div className="prosto--text">
                                <p>Дядя Фёдор — прозвище шестилетнего мальчика, которое он получил за то, что ведёт себя как взрослый: самостоятельно варит суп и рассуждает «поумнее некоторых академиков». Дядя Фёдор познакомился с говорящим бездомным котом, но родители не разрешили оставить его в квартире. Тогда Дядя Фёдор и кот, которому Дядя Фёдор, по его личной просьбе, присвоил фамилию Матроскин, уехали в деревню Простоквашино, где приняли в свою компанию пса Шарика и втроём поселились в одном из заброшенных домов.</p>
                                <p>Для Дяди Фёдора характерны следующие личные качества: рассудительность, стремление к независимости, любовь к природе и животным, настоящая хозяйственная жилка. Он символизирует протест против чрезмерного гнёта родителей.</p>
                            </div>
                            <img src={prosto2Icon} alt="Простоквашино"/>
                        </div>
                    </div>
                : ''}
                {this.state.tabMatroskin ? 
                    <div>
                        <h2 className="prosto--title">кот Матроскин</h2>
                        <div className="prosto__box">
                            <img src={prosto1Icon} alt="Простоквашино"/>
                            <div className="prosto--text">
                                <p>Матроскин — полосатый говорящий кот. Склонен к рациональному мышлению: предпочитает из всего извлекать материальную выгоду. Периодически напоминает о том, что его кличка — это «фамилие такое» (ранее носил разные имена, среди которых: Барсик, Пушок, Оболтус и Кис Кисыч).</p>
                                <p>В более поздних произведениях из цикла о Простоквашине, персонаж претерпел серьёзную эволюцию, сохранив, тем не менее, свои основополагающие черты. В 1990-х годах Матроскин остаётся рачительным хозяином и демонстрирует незаурядный ум и изобретательность, граничащие с изворотливостью, что позволяет ему хорошо вписаться в новые жизненные реалии.</p>
                            </div>
                        </div>
                    </div> 
                : ''}
                {this.state.tabSharik ? 
                    <div>
                    <h2 className="prosto--title">Шарик</h2>
                    <div className="prosto__box">
                        <img src={prosto3Icon} alt="Простоквашино"/>
                        <div className="prosto--text">
                            <p>Бездомный добродушный деревенский пёс «из простых собак, не из породистых», обретший хозяина — Дядю Фёдора, друзей и крышу над головой. Ранее охранял дачу у профессора Сëмина Ивана Трофимовича, который составлял «охотничье-собачий» словарь. Тогда он и научился разговаривать.</p>
                            <p>На вопрос недовольного Матроскина о его полезных способностях на что Шарик ответил: «Я могу картошку окучивать задними лапами. И посуду мыть — языком облизывать. И места мне не надо, я могу на улице спать».</p>
                        </div>
                    </div>
                </div> 
                : ''}

                

            </div>
        )
    }
}

export default Prostokvashino
