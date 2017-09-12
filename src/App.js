import React, { Component } from 'react';
import SideNav from './components/sideNav/sideNav'
import Profile from './components/profile/profile'

class App extends Component {


  render() {
    return (
      <div>
        <SideNav />
        <Profile authenticated={this.props.auth.isAuthenticated()} auth={this.props.auth} />
      </div>
    )
  }

}

export default App;
