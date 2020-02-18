import React from 'react'
import axios from 'axios'

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
                    <li><a href="#">Черепашки Ниндзя</a></li>
                    <li><a href="#">Том и Джери</a></li>
                    <li><a href="#">Простоквашино</a></li>
                    <li><a href="#">4</a></li>
                    {
                    this.state.cartoons.map(cartoon => {
                       return <li key={cartoon.id}><a href="#">{cartoon.label}</a></li>
                    })
                    }
                    
                </ul>
            </div>
        )
    }

    
}

export default Sidebar
