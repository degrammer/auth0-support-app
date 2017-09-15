import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import TicketSeverityChooser from './ticketSeverityChooser'
import TicketDescription from './ticketDescription'
import RequestSelector from './requestSelector'

class TicketForm extends Component {

    constructor(props) {
        super(props)
        this._getForm = this._getForm.bind(this)
    }

    render() {
        return (<div className="auth0-ticket-form">{this._getForm()}</div>)
    }


    _getForm() {

        const renderField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => (
            <div className="auth0-form-item">
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={placeholder} type={type} />
                </div>
            </div>
        )

        return (

            <form onSubmit={this.props.handleSubmit}>
                <h1>New ticket</h1>
                <Field
                    label="Subject*"
                    name="subject"
                    type="text"
                    component={renderField}
                    placeholder="Give a subject to your ticket"
                />
                <div className="auth0-form-item">
                    <label>Requested by</label>
                    <RequestSelector onCollaboratorSelected={this.props.onCollaboratorSelected} />
                </div>
                <div className="auth0-form-item">
                    <label>Severity</label>
                    <TicketSeverityChooser onSeveritySelected={this.props.onSeveritySelected} />
                </div>
                <div className="auth0-form-item">
                    <TicketDescription onDescription={this.props.onDescription} />
                </div>
                <div className="auth0-form-item row">
                    <div className="col-sm-2">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <div className="col-sm-2">
                        <div className="btn btn-transparent">Cancel</div>
                    </div>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: "auth0-ticket-form" })(TicketForm)