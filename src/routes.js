import React from 'react'
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom'
import Main from './components/Main'
import Profile from './components/Profile'
import MailList from './components/MailList'
import ScrollToTop from './components/ScrollTop'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/profile' component={ Profile } />
          <Route exact path='/mail' component={ MailList } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
)