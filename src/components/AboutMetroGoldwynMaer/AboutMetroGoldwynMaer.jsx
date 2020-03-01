import React, {useState} from 'react'

import Button from '../Button/Button'

import mgmIcon from '../../assets/img/mgm.png'
import oscarIcon from '../../assets/img/oscar.png'
import './AboutMetroGoldwynMaer.scss'

const AboutMetroGoldwynMaer = () => {

    const[logoShow, setLogoShow] = useState(false)

    const onModal = () => {
        setLogoShow(!logoShow)
    }

    return (
        <div className="mgm">
            <img className="mgm--logo" src={mgmIcon} alt="metro goldwyn maer"/>
            <h1>Metro Goldwyn Maer</h1>
            <div className="mgm__box">
                <div className="mgm__box__text">
                <img className="mgm--oscar" src={oscarIcon} alt="oscar"/>
                <p>Компания «Metro-Goldwyn-Mayer» была основана в апреле 1924 года владельцем крупной сети кинотеатров, Маркусом Ловом, организовавшим слияние трёх кинопроизводителей — «Metro Pictures», «Goldwyn Pictures» С. Голдвина и «Louis B. Mayer Pictures» Л. Б. Майера. Поскольку Николас Шенк, компаньон Лова, был занят обустройством кинотеатров на восточном побережье, в качестве заведующего кинопроизводством в Калифорнии был назначен Л. Б. Майер.</p>
                <p>Логотипом новой компании стал рычащий лев студии Голдвина, впервые появившийся на киноэкранах в 1916 году. У той же студии был позаимствован девиз «Искусство ради искусства». С 1932 г. рекламная стратегия компании базировалась на утверждении, что в её фильмах «больше звёзд, чем на небе».</p>
                <p>Первой задачей Майера было завершение съёмок самого крупнобюджетного фильма в истории немого кино, «Бен-Гур: история Христа»; этот проект достался ему в наследство от студии Голдвина. Триумф этого фильма позволил MGM обойти Universal Studios в качестве крупнейшей по выручке студии США. Звание «локомотива Голливуда» и первое место в «большой пятёрке» кинопроизводителей MGM сохранит на протяжении последующих 30 лет.</p>
                <p>Одним из самых успешных подразделений MGM (до закрытия в 1957 году) было мультипликационное, где в 1940-е годы работали художники-мультипликаторы Текс Эйвери (Red Hot Riding Hood, Swing Shift Cinderella, фильмы про собаку Друпи), дуэт Харман-Айзинг (фильмы про медвежонка Барни) и дуэт Ханна-Барбера (мультфильмы про Тома и Джерри, из которых 7 были удостоены «Оскара»).</p>
                <p>История этого подразделения началась в 1930 году, когда Майер заказал знаменитому Абу Айверксу создание мультперсонажа для первых мультфильмов в текниколоре. Так появился лягушонок Флип, к которому вскоре присоединился Вилли Вуппер.</p>
                </div>
            </div>
            <Button 
                onClick={onModal} 
                className="mgm__btn" 
                buttonName={logoShow ? 'назад' : 'история логотипа'}
            />
            {logoShow && <div className="mgm__popup">
            <h3>Слэтс на логотипе MGM с 1924 по 1928 год</h3>
            <p>Слэтс был первым львом, появившемся на логотипе тогда ещё просто Goldwyn Pictures. Логотип был разработан Говардом Диецом (Howard Dietz), был чёрно-белым, лев на нём просто озирался по сторонам и не рычал. Слэтс представлял все фильмы Goldwyn Picture с 1917 по 1924 год и MGM с 1924 and 1928 год. Он умер в 1936 году и сейчас его шкура находится в музее города МакФерсон в Канзасе.</p>
            <h3>Джеки (1928–1956)</h3>
            <p>Джеки был первым львом, рычание которого услышали зрители, причем первое время запись рычания включалась параллельно на граммофоне. Кроме того, Джеки снялся в около ста фильмах киностудии. Телли (Telly) и Каффи (Coffee) (1927–1934)</p>
            <h3>Джордж (1956–1958)</h3>
            <p>Проведя на экране всего пару лет этот лев всё же успел отличиться — у него была самая большая грива среди всех остальных.</p>
            <h3>Лео (1957-настоящее время)</h3>
            <p>Хотя Лео и обладал самой маленькой гривой среди всех остальных (он был ещё молод когда снимался для логотипа), он занимает первое место по продолжительности службы и, судя по всему, не собирается на пенсию. В 2012 году для очередной серии Бондианы «Skyfall» даже был сделан редизайн логотипа в формате 3D.</p>
            </div>}
        </div>
    )
}

export default AboutMetroGoldwynMaer
