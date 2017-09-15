import React from 'react'
import { Route, Router } from 'react-router-dom'
import App from './App'
import Callback from './components/callback/callback'
import Auth from './components/auth/auth'
import history from './components/router/history'
import Tickets from './components/tickets/tickets'
import TicketsList from './components/tickets/ticketsList'
import { Provider } from "react-redux"
import store from './store'

const auth = new Auth();


const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {

  return (
    <Provider store={store}>
      <Router history={history} component={App}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/tickets" render={(props) => <Tickets auth={auth} {...props} />} />
          <Route path="/list" render={(props) => <TicketsList auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }} />
        </div>
      </Router>
    </Provider>

  );
}
