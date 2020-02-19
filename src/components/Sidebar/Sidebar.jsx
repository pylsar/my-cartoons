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
                    this.state.cartoons.map(cartoon => {
                       return <li key={cartoon.id}><Link to={cartoon.link}>{cartoon.label}</Link></li>
                    })
                    }
                    
                </ul>
            </div>
        )
    }

    
}

export default Sidebar
