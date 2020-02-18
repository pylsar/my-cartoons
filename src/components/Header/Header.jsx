import React from 'react'
import {Link} from 'react-router-dom';

import './Header.scss'

class Header extends React.Component {

    render(){

        return (
            <header className="header">
                <img className="header__logo" src="#" alt="logo"/>
                <ul className="header__list">
                    <li><Link to="/home">Главная</Link></li>
                    <li><Link to="/walt-disney">история Walt Disney</Link></li>
                    <li><Link to="/souzmyltflm">история Союз Мультфильм</Link></li>
                    <li><Link to="/metro-goldwyn-maer">история Goldwin Maers</Link></li>
                    <li><Link to="/marvel">история Marvil</Link></li>
                </ul>
            </header>
        )
    }

    

   
}

export default Header
