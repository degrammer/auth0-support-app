import React, { Component } from 'react'
import UserProfile from './userProfile'
import profilePic from './profilePic.png'

class Authenticated extends Component {
    render() {
        return (<div className="auth0-authenticated">
            <div className="auth0-authenticated__help"> <a  href="!#/Help">Help & support</a></div>
           <UserProfile userPhoto={profilePic} userFullName="Julieta Curdi" />

        </div>)
    }
}

export default Authenticated