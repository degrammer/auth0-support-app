import React, { Component } from 'react'
import Authenticated from './authenticated'
import UnAuthenticated from './unAuthenticated'
import './style.css'


class Profile extends Component {
    render() {

       
        return (<div className="auth0-profile">{this.props.status === 'authenticated' ? this.getAuthenticatedView() : this.getUnAuthenticatedView()}</div>)
    }

    getAuthenticatedView() {

        return (

            <Authenticated />
        )
    }

    getUnAuthenticatedView() {
        return (

            <UnAuthenticated />
        )
    }
}

export default Profile