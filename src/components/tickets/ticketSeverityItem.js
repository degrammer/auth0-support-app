import React, { Component } from 'react'

class TicketSeverityItem extends Component {
    render() {
        return (

            <div className="auth0-ticket-severity-item">
                <div className="auth0-ticket-severity-item__badge_container">
                <span className={this.getBadge(this.props.level)}></span>
                </div>
                <div className="auth0-ticket-severity-item_details">
                <span className="auth0-ticket-severity-item__title">{this.props.title}</span>
                <p className="auth0-ticket-severity-item__description">{this.props.description}</p>
                </div>
            </div>
        )
    }


    getBadge(level) {
       
       return `auth0-ticket-severity-item__badge auth0-ticket-severity-item__badge-${level}`
    }
}

export default TicketSeverityItem