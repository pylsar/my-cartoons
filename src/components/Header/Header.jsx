import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import './Header.scss'

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
                <img className="header__logo" src="#" alt="logo"/>
                <ul className="header__list">
                    {/* <li><Link to="/home">Главная</Link></li>
                    <li><Link to="/walt-disney">история Walt Disney</Link></li>
                    <li><Link to="/souzmyltflm">история Союз Мультфильм</Link></li>
                    <li><Link to="/metro-goldwyn-maer">история Goldwin Maers</Link></li>
                    <li><Link to="/marvel">история Marvil</Link></li> */}
                    {this.state.cartoons.map((cartoon, index) => {
                        return (
                            <li key={index}><Link to={cartoon.link}>{cartoon.name}</Link></li>
                        )
                    })}
                </ul>
            </header>
        )
    }
   
}

export default Header
