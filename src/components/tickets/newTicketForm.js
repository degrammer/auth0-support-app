import React, { Component } from 'react'
import TicketSeverityChooser from './ticketSeverityChooser'
import TicketDescription from './ticketDescription'
import RequestSelector from './requestSelector'
import TicketServices from './data/ticketServices'
import Callback from '../callback/callback'
import './style.css'

class NewTicketForm extends Component {


    constructor(props) {

        super(props)
        this._setSubject = this._setSubject.bind(this)
        this._onCollaboratorSelected = this._onCollaboratorSelected.bind(this)
        this._onSeveritySelected = this._onSeveritySelected.bind(this)
        this._onDescription = this._onDescription.bind(this)
        this._submitTicket = this._submitTicket.bind(this)
        this._mapCollaborators = this._mapCollaborators.bind(this)
        this.state = { collaborators: [], severity: 0, description: "", fetching: false }
    }

    render() {

    
        return (

            <div className="auth0-new-ticket-form">
            <div className="alert alert-success"><strong>Well done!</strong> Your ticket was created successfully</div>
               {this.state.fetching || <form name="auth0-new-ticket-form" onSubmit={this.handleSubmit}>
                    <h1>New ticket</h1>
                    <div className="auth0-form-item">
                        <label>Subject*</label>
                        <input type="text" onChange={this._setSubject} placeholder="Give a subject to your ticket" />
                    </div>
                    <div className="auth0-form-item">
                        <label>Requested by</label>
                        <RequestSelector onCollaboratorSelected={this._onCollaboratorSelected} />
                    </div>
                    <div className="auth0-form-item">
                        <label>Severity</label>
                        <TicketSeverityChooser onSeveritySelected={this._onSeveritySelected} />
                    </div>
                    <div className="auth0-form-item">
                        <TicketDescription onDescription={this._onDescription} />
                    </div>
                    <div className="auth0-form-item row">
                        <div className="col-sm-2">
                            <a onClick={this._submitTicket} className="btn btn-primary">
                                Submit</a>
                        </div>
                        <div className="col-sm-2">
                            <div className="btn btn-transparent">Cancel</div>
                        </div>
                    </div>

                </form> }
               {this.state.fetching &&  <Callback  />}

            </div>)
    }


    _onDescription(description) {
        this.setState({ description })
    }

    _onSeveritySelected(severity) {
        this.setState({ severity })
    }

    _onCollaboratorSelected(collaborators) {
        this.setState({ collaborators })
    }

    _setSubject(event) {
        this.setState({ subject: event.target.value })
    }

    _mapCollaborators() {
        return this.state.collaborators.map((collaborator) => {

            let split = collaborator.split('_')

            return { name: split[0], email: split[1] }
        })
    }

    _submitTicket(event) {

        event.preventDefault()

        let ticket = {
            subject: this.state.subject,
            body: this.state.description,
            name: "rubencho",
            email: "rubenchorestrepo@gmail.com",
            ticketPriority: this.state.severity,
            collaborators: this._mapCollaborators()
        }

        this.setState({fetching: true})
        window.scrollTo(0,0)
        new TicketServices().createTicket({ticket: ticket}).then((ticket) => {

              this.setState({fetching: false})
           
        }).catch((err) => {

             this.setState({fetching: false})
            debugger
        })


    }

    handleSubmit(event) {

        event.preventDefault()
    }
}

export default NewTicketForm