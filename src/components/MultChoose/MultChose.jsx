import React, {Fragment} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import './MultChoose.scss'

class MultChose extends React.Component{

    state = {
        ninjas: []
    }

    componentDidMount(){
        axios.get('http://localhost:3001/ninja')
        .then(res => {
            this.setState({
                ninjas: res.data
            })
        })
    }

    render(){
        return (
            <Fragment>
            {this.state.ninjas.map((ninja, index) => {
                return <li key={index}><Link to={ninja.link}>{ninja.name}<img src={require(`../../assets/img/${ninja.src}.png`)} alt={ninja.name}/></Link></li>
            })}
            </Fragment>
        )
    }
}

export default MultChose
