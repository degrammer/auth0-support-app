import React, { Component } from 'react'
import UserProfile from './userProfile'
import profilePic from './profilePic.png'

class Authenticated extends Component {
    render() {
        return (<ul className="auth0-authenticated">
            <li> <a href="!#/Help">Help & support</a></li>
            <li>  <UserProfile userPhoto={profilePic} userFullName="Julieta Curdi" /></li>

        </ul>)
    }
}

export default Authenticated