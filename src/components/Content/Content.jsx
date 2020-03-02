import React from 'react'

import { Switch, Route} from 'react-router-dom'

import Form from '../Form/Form'
import AboutWaltDisney from '../AboutWaltDisney/AboutWaltDisney'
import AboutSouzMult from '../AboutSoyuzMult/AboutSouzMult'
import AboutMertoGoldwynMaer from '../AboutMetroGoldwynMaer/AboutMetroGoldwynMaer'
import AboutMarvel from '../AboutMarvel/AboutMarvel'
import TurtlesNinja from '../MultTurtles/TurtlesNinja/TurtlesNinja'
import Prostokvashino from '../Prostokvashino/Prostokvashino'
import Leonardo from '../MultTurtles/Leonardo/Leonardo'
import Donatello from '../MultTurtles/Donatello/Donatello'
import Rafael from '../MultTurtles/Rafael/Rafael'
import Mikelandjelo from '../MultTurtles/Mikelandjelo/Mikelandjelo'

import './Content.scss'

const Content = () => {
    return (
        <Switch>
        <div className="content">
            <Route path="/" component={Form} exact />
            <Route path="/walt-disney" component={AboutWaltDisney} exact />
            <Route path="/souzmyltflm" component={AboutSouzMult} exact />
            <Route path="/metro-goldwyn-maer" component={AboutMertoGoldwynMaer} exact />
            <Route path="/marvel" component={AboutMarvel} exact />
            <Route path="/ninja-turtles" component={TurtlesNinja} exact />
            <Route path="/prostokvashino" component={Prostokvashino} exact />
            <Route path="/ninja-turtles/leonardo" component={Leonardo} exact/>
            <Route path="/ninja-turtles/donatello" component={Donatello} exact />
            <Route path="/ninja-turtles/rafael" component={Rafael} exact />
            <Route path="/ninja-turtles/mikelandjelo" component={Mikelandjelo} exact />
        </div>
        </Switch>
    )
}

export default Content
