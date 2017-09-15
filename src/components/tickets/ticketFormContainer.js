import React, { Component } from 'react'
import TicketServices from './data/ticketServices'
import Callback from '../callback/callback'
import TicketForm from './ticketForm'
import './style.css'

class TicketFormContainer extends Component {


    constructor(props) {

        super(props)
        this._onCollaboratorSelected = this._onCollaboratorSelected.bind(this)
        this._onSeveritySelected = this._onSeveritySelected.bind(this)
        this._onDescription = this._onDescription.bind(this)
        this._submitTicket = this._submitTicket.bind(this)
        this._mapCollaborators = this._mapCollaborators.bind(this)
        this._getAlertClass = this._getAlertClass.bind(this)
        this._getForm = this._getForm.bind(this)
        this._saveTicket = this._saveTicket.bind(this)
        this.ticketServices = new TicketServices()


        this.state = {
            collaborators: [],
            severity: 0,
            description: "",
            fetching: false,
            error: false,
            message: '',
            createdTicket: {}
        }
    }

    render() {

        return (
            <div className="auth0-new-ticket-form">
                <div className={this._getAlertClass()}><strong>Well done!</strong> {this.state.message},ticket number #{this.state.createdTicket.id}</div>
                {this.state.fetching || this._getForm()}
                {this.state.fetching && <Callback />}
            </div>)
    }


    _getForm() {

        return (

            <TicketForm onSubmit={this._submitTicket}
                onCollaboratorSelected={this._onCollaboratorSelected}
                onSeveritySelected={this._onSeveritySelected}
                onDescription={this._onDescription} />
        )
    }

    _getAlertClass() {
        if (this.state.createdTicket.id)
            return "alert alert-success auth0-new-ticket-form__success"
        return "alert alert-success"
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

    _mapCollaborators() {
        
        return this.state.collaborators.map((collaborator) => {

            let split = collaborator.split('_')

            return { name: split[0], email: split[1] }
        })
    }

    _submitTicket(values) {

        let ticket = {
            subject: values.subject,
            body: this.state.description,
            name: localStorage.getItem("nickname"),
            email: localStorage.getItem("email"),
            ticketPriority: this.state.severity,
            collaborators: this._mapCollaborators()
        }

        this._saveTicket(ticket)

    }

    _saveTicket(ticket) {

        this.setState({ fetching: true })
        window.scrollTo(0, 0)

        this.ticketServices.createTicket({ ticket }).then((response) => {

            this.setState({
                fetching: false,
                error: false,
                message: response.data.message,
                createdTicket: response.data.ticket
            })

        }).catch((err) => {

            this.setState({ fetching: false, error: true })

        })
    }

}

export default TicketFormContainer