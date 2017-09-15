import React, { Component } from 'react';
import Auth0Spinner from '../elements/auth0Spinner'

class Callback extends Component {
  render() {
    const style = {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      marginTop: '20%'
    }

    return (
      <div style={style}>
      <Auth0Spinner option="lg" />
      </div>
    );
  }
}

export default Callback;