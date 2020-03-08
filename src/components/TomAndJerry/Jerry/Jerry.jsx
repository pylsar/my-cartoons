import React from 'react'

import '../TaJCard.scss'
import JerryIcon from '../../../assets/img/jerry.png'

const Jerry = () => {
    return (
        <div className="tajCard">
            <div className="tajCard__box">
                <p>Является основной целью в погонях и схватках для кота Тома</p> 
                <p>Постоянно устроивает Тому какую-нибудь пакость</p>
                <p>Ведёт независимый и приспособленческий образ жизни</p>
                <p>Любит воровать продукты из холодильника и отдыхать</p>
                <p>В одной из серий видно, что Джерри лунатик</p>
                <p>Любит поиздеваться над Томом</p>
            </div>
            <img src={JerryIcon} alt="Томас"/>
        </div>
    )
}

export default Jerry
