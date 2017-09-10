import React, { Component } from 'react'
import TicketSeverityChooser from './ticketSeverityChooser'
import TicketDescription from './ticketDescription'
import './style.css'

class NewTicketForm extends Component {
    render() {
        return (

            <div className="auth0-new-ticket-form">
                <form onSubmit={this.handleSubmit}>
                    <h1>New ticket</h1>
                    <div className="auth0-form-item">
                        <label>Subject*</label>
                        <input type="text" placeholder="Give a subject to your ticket" />
                    </div>
                    <div className="auth0-form-item">
                        <label>Requested by</label>
                        <input type="text" placeholder="Choose a requester" />
                    </div>
                    <div className="auth0-form-item">
                        <label>Severity</label>
                        <TicketSeverityChooser />
                    </div>
                    <div className="auth0-form-item">
                        <TicketDescription />
                    </div>
                </form>
            </div>)
    }

    handleSubmit(event) {
        event.preventDefault()
    }
}

export default NewTicketForm