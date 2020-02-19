import React from 'react'

import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'

import './Main.scss'


class Main extends React.Component {
    render(){
        return (
            <main className="main">
                <Sidebar />
                <Content />
            </main>
        )
    }
}

export default Main
