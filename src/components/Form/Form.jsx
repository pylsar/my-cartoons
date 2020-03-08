import React from 'react'

import Input from '../Input/Input'
import Button from '../Button/Button'

import DonaldMail from '../../assets/img/mailman.png'
import './Form.scss'

class Form extends React.Component {

    state = {
        Email: '',
        Password: '',
        Age: '',
        text: ''
    }

    handlerSubmit = (event) => {
        event.preventDefault()
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return (
            <div className="form">
                <h1>Отправьте отзыв</h1>
                <span className="form--subscription">После отправки отзыва наши почтальоны лично доставят Ваши сообщения до мульт корпораций </span>
                <div className="form__container">
                    <form className="form__container__box" onSubmit={this.handlerSubmit}>  
                        <Input 
                            onChange={this.handleChange} 
                            name="Email" 
                            id="Email" 
                            value={this.state.value}
                            required
                        />
                        <Input 
                            onChange={this.handleChange} 
                            name="Cartoon" 
                            id="Cartoon" 
                            value={this.state.value}
                            required
                        />
                        <Input 
                            onChange={this.handleChange} 
                            name="Age" 
                            id="Age" 
                            type="number"
                            value={this.state.value}
                        />
                        <label htmlFor="text" className="form__container__box--labeltextarea">Type Here:</label>
                        <textarea 
                            id="text" 
                            rows="8" 
                            cols="45" 
                            name="text"
                            onChange={this.handleChange}
                            value={this.state.value}
                        />
                        <Button 
                            buttonName="Отправить Дональда"
                            // onClick={this.handleClick}
                            />
                    </form>
                    <img src={DonaldMail} alt="почтальон Дональд"/>
                </div>    
            </div>
        )
    }
}



export default Form