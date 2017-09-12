import React, { Component } from 'react'
import UserProfile from './userProfile'
import defaultProfilePic from './profilePic.png'

class Authenticated extends Component {


    constructor(props) {
        
        super(props)
        this.state = { userPhoto: defaultProfilePic, userFullName: 'loading . . .' }
        this.checkStatus = this.checkStatus.bind(this)
        this.checkStatus()
    }


    render() {
        return (<div className="auth0-authenticated">
            <div className="auth0-authenticated__help"> <a href="!#/Help">Help & support</a></div>
            <UserProfile userPhoto={this.state.userPhoto} userFullName={this.state.userFullName} auth={this.props.auth} />
        </div>)
    }


    checkStatus() {

        const { userProfile, getProfile, isAuthenticated, logout } = this.props.auth;

        if (!userProfile) {
            getProfile((err, profile) => {

                if (!err && profile) {
                    this.setState({ userFullName: profile.nickname, userPhoto: profile.picture })
                }
            })

        } else {
            this.setState({ userFullName: userProfile.nickname, userPhoto: userProfile.picture })
        }

    }
}

export default Authenticated