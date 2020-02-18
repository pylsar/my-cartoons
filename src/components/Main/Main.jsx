import React from 'react'

import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'

import './Main.scss'

const mults = [
    {name: 'Черепашки Ниндзя', url: '/ghjgjh'},
    {name: 'Том и Джери', url: '/vnb'}
  ];


class Main extends React.Component {
    render(){
        return (
            <main className="main">
                <Sidebar mults={mults}/>
                <Content />
            </main>
        )
    }
}

export default Main
