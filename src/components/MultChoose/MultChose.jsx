import React, {Fragment} from 'react'
import axios from 'axios'

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
                return <li key={index}><a href="#">{ninja.name}</a></li>
            })}
            </Fragment>
        )
    }
}

export default MultChose
