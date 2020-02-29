import React from 'react'

import './Leonardo.scss'

const Leonardo = () => {
    return (
        <div className="turtle">
            <h2 className="turtle--title">Леонардо</h2>
            <div className="turtle__box">
                <img class="turtle__img" src="https://images.unsplash.com/photo-1561634062-e0b25ff5ce18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="asd"/>
                <div className="turtle__box__content">
                    <ul>
                    <li>имя</li>
                    <li>прозвище</li>
                    <li>любимое оружие</li>
                    <li>цвет пояса</li>
                    </ul>
                    <span>тут куча текста</span>
                </div>
            </div>
        </div>
    )
}

export default Leonardo
