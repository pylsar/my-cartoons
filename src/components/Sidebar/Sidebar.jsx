import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import './Sidebar.scss'


class Sidebar extends React.Component {

    state = {
        cartoons: []
    }

    componentDidMount(){
        axios.get('http://localhost:3001/sidebar')
            .then(res => {
                console.log(res.data)
                this.setState({
                    cartoons: res.data
                })
            })
    }

    render(){

    
        return (
            <div className="sidebar">
                <h2 className="sidebar--title">Мульты</h2>
                <ul>
                    {
                    this.state.cartoons.map((cartoon, index) => {
                       return <li key={index}><Link to={cartoon.link} className="sidebar--link"><span></span><span></span><span></span><span></span>{cartoon.label}</Link></li>
                    })
                    }
                    
                </ul>
            </div>
        )
    }

    
}

export default Sidebar
