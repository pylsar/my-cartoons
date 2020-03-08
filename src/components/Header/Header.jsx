import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import './Header.scss'
import WaltDisneyIcon from '../../assets/img/walt_disney.jpg'

class Header extends React.Component {

    state={
        cartoons: []
    }

    componentDidMount(){
        axios.get('http://localhost:3001/header')
            .then(res => {
                this.setState({
                    cartoons: res.data
                })
            })
    }

    render(){

        return (
            <header className="header">
                <Link to="/"className="header__logo"><img className="header__logo--img" src={WaltDisneyIcon} alt="logo" /></Link>
                <nav>
                    <ul className="header__list">
                        {this.state.cartoons.map((cartoon, index) => {
                            return (
                                <li key={index}><Link to={cartoon.link} className="header--link">{cartoon.name}</Link></li>
                            )
                        })}
                    </ul>
                </nav>
            </header>
        )
    }
   
}

export default Header
