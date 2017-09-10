import React, { Component } from 'react';
import SideNav from './components/sideNav/sideNav'
import Profile from './components/profile/profile'
import NewTicketForm from './components/tickets/newTicketForm'

class App extends Component {
  render() {
    return (
      <div>
        <SideNav />
        <Profile status="authenticated" />
        <div className="container">
          <NewTicketForm />
        </div>
      </div>
    )
  }
}

export default App;
