import React from 'react'

import Input from '../Input/Input'
import Button from '../Button/Button'

import DonaldMail from '../../assets/img/mailman.png'
import './Form.scss'

const Form = () => {
    return (
        <div className="form">
            <h1>Отправте отзыв</h1>
            <span className="form--subscription">После отправки отзыва наши почтальоны лично доставят Ваши сообщения до мульт корпораций </span>
            <div className="form__container">
                <form className="form__container__box">  
                    <Input name="Email" id="Email"/>
                    <Input name="Cartoon" id="Cartoon"/>
                    <Input name="Age" id="Age"/>
                    <label htmlFor="text" className="form__container__box--labeltextarea">Type Here</label>
                    <textarea id="text" rows="8" cols="45" name="text"></textarea>
                    <Button buttonName="Отправить Дональда"/>
                </form>
                <img src={DonaldMail} alt="почтальон Дональд"/>
            </div>    
        </div>
    )
}

export default Form