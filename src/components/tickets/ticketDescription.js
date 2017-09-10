import React, { Component } from 'react'

class TicketDescription extends Component {
    render() {
        return (<div className="auth0-tickets-ticket-description">

            <div className="auth0-tickets-ticket-description__nav">
                <span className="active"><a>Description&nbsp;*</a><span className="bottom-line"></span></span>
                <span><a>Preview</a></span>
                </div>
               
            <textarea className="auth0-tickets-ticket-description__enter_problem" placeholder="describe your problem"></textarea>
        </div>)
    }
}

export default TicketDescription