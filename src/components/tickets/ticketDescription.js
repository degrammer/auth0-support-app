import React, { Component } from 'react'

class TicketDescription extends Component {
    render() {
        return (<div className="auth0-tickets-ticket-description">

            <ul className="nav nav-tabs">
            <li className="active"><a>Description*</a></li>
             <li><a>Preview</a></li>
            </ul>

            <textarea className="auth0-tickets-ticket-description__enter_problem" placeholder="describe your problem"></textarea>
        </div>)
    }
}

export default TicketDescription