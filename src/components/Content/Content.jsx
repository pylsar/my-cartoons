import React from 'react'

import { Switch, Route} from 'react-router-dom'

import Home from '../Home/Home'
import AboutWaltDisney from '../AboutWaltDisney/AboutWaltDisney'
import AboutSouzMult from '../AboutSoyuzMult/AboutSouzMult'
import AboutMertoGoldwynMaer from '../AboutMetroGoldwynMaer/AboutMetroGoldwynMaer'
import AboutMarvel from '../AboutMarvel/AboutMarvel'

import './Content.scss'

const Content = () => {
    return (
        <Switch>
        <div className="content">
            <Route path="/home" component={Home} exact />
            <Route path="/walt-disney" component={AboutWaltDisney} exact />
            <Route path="/souzmyltflm" component={AboutSouzMult} exact />
            <Route path="/metro-goldwyn-maer" component={AboutMertoGoldwynMaer} exact />
            <Route path="/marvel" component={AboutMarvel} exact />
        </div>
        </Switch>
    )
}

export default Content
