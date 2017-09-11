import React, { Component } from 'react'
import TicketSeverityChooser from './ticketSeverityChooser'
import TicketDescription from './ticketDescription'
import RequestSelector from './requestSelector'
import './style.css'

class NewTicketForm extends Component {
    render() {
        return (

            <div className="auth0-new-ticket-form">
                <form name="auth0-new-ticket-form" onSubmit={this.handleSubmit}>
                    <h1>New ticket</h1>
                    <div className="auth0-form-item">
                        <label>Subject*</label>
                        <input type="text" placeholder="Give a subject to your ticket" />
                    </div>
                    <div className="auth0-form-item">
                        <label>Requested by</label>
                      <RequestSelector />
                    </div>
                    <div className="auth0-form-item">
                        <label>Severity</label>
                        <TicketSeverityChooser />
                    </div>
                    <div className="auth0-form-item">
                        <TicketDescription />
                    </div>
                    <div className="auth0-form-item row">
                        <div className="col-sm-2">
                         <div className="btn btn-primary">Submit</div>
                         </div>
                           <div className="col-sm-2">
                             <div className="btn btn-transparent">Cancel</div>
                             </div>
                    </div>
                    
                </form>
            </div>)
    }

    handleSubmit(event) {
        event.preventDefault()
    }
}

export default NewTicketForm