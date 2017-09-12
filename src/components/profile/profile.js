import React, { Component } from 'react'
import Authenticated from './authenticated'
import UnAuthenticated from './unAuthenticated'
import './style.css'


class Profile extends Component {

    constructor(props) {
        super(props)      
        this.getAuthenticatedView = this.getAuthenticatedView.bind(this)
    }


    render() {

        return (<div className="auth0-profile">{this.props.authenticated === true ? this.getAuthenticatedView() : this.getUnAuthenticatedView()}</div>)
    }

    getAuthenticatedView() {

        return (

            <Authenticated auth={this.props.auth} />
        )
    }

    getUnAuthenticatedView() {
        return (

            <UnAuthenticated />
        )
    }

}

export default Profile