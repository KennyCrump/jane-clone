import React from 'react';
import {Switch, Route} from 'react-router-dom'

import HomePage from './Components/Home'
import Women from './Components/Women'
import Men from './Components/Men'
import Shoes from './Components/Shoes'
import Accessories from './Components/Accessories'
import Beauty from './Components/Beauty'
import Maternity from './Components/Maternity'
import Baby from './Components/Baby'
import Kids from './Components/Kids'
import Toys from './Components/Toys'
import Home from './Components/Home'
import Pets from './Components/Pets'
import FunFinds from './Components/FunFinds'
import New from './Components/New'
import EndingSoon from './Components/EndingSoon'
import Popular from './Components/Popular'

export default <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/women" component={Women}/>
    <Route path="/men" component={Men}/>
    <Route path="/shoes" component={Shoes}/>
    <Route path="/accessories" component={Accessories}/>
    <Route path="/beauty" component={Beauty}/>
    <Route path="/maternity" component={Maternity}/>
    <Route path="/baby" component={Baby}/>
    <Route path="/kids" component={Kids}/>
    <Route path="/toys" component={Toys}/>
    <Route path="/home" component={Home}/>
    <Route path="/pets" component={Pets}/>
    <Route path="/funfinds" component={FunFinds}/>
    <Route path="/new" component={New}/>
    <Route path="/endingsoon" component={EndingSoon}/>
    <Route path="/popular" component={Popular}/>

</Switch>
