import React, {Component} from 'react'
import Auth0 from '../auth/auth'

class UnAuthenticated extends Component
{
    render()
    {
       return (<div className="auth0-unauthenticated">
            <div className="auth0-authenticated__help"> <a  href="!#/Help">Help & support</a></div>
            <div>
                <a className="btn btn-success btn-sm auth0-unauthenticated__login_button" onClick={this.login}>Login</a>
            </div>

        </div>)
    }

    login(event)
    {
        if(event) event.preventDefault()

        const auth = new Auth0()
        auth.login()
    }
}

export default UnAuthenticated
