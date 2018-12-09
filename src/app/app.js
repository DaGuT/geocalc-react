import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Sidebar from '../misc/components/sidebar/sidebar'
import IndexPage from './pages/index/index';
import HelpPage from './pages/help/help';
import AboutProblems from './pages/aboutproblems/index';

export default class App extends Component {
  render() {
    return ([
      <Sidebar params={{
          'displayName' : 'Navigation bar',
          'blockID' : 'sidebar-nav'
        }} brand='GeoCalc' linksList={[
          {
            link: '/',
            name: 'Калькулятор'
          }, {
            link: '/geodezzadachi',
            name: 'О геодезических задачах'

          }, {
            link: '/help',
            name: 'Инструкция к сервису'

          }
        ]}/>,
      <Switch>
        <Route exact="exact" path='/' component={IndexPage}/>
        <Route path='/help' component={HelpPage}/>
        <Route path='/geodezzadachi' component={AboutProblems}/>
      </Switch>
    ])
  }
}

//
