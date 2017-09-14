import React, { Component } from 'react'

class TicketDescription extends Component {

    constructor(props)
    {
        super(props)
        this._handleChange = this._handleChange.bind(this)
    }

    render() {
        return (<div className="auth0-tickets-ticket-description">

            <ul className="nav nav-tabs">
                <li className="active"><a>Description*</a></li>
                <li><a>Preview</a></li>
            </ul>

            <textarea onChange={this._handleChange} className="auth0-tickets-ticket-description__enter_problem" placeholder="describe your problem"></textarea>
        </div>)
    }

    _handleChange(event) {
       
       if(this.props.onDescription) this.props.onDescription(event.target.value)
    }

}

export default TicketDescription