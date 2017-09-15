import React, { Component } from 'react'

class TicketSeverityItem extends Component {

    constructor(props) {
        super(props)
        this._getClass = this._getClass.bind(this)
    }

    render() {
        return (

            <div className={this._getClass(this.props.selected)} onClick={(e) => { this.props.click(this, this.props.id) }}>
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


    _getClass(selected) {
        if (selected) return "auth0-ticket-severity-item auth0-ticket-severity-item__selected"

        return "auth0-ticket-severity-item"
    }


    getBadge(level) {

        return `auth0-ticket-severity-item__badge auth0-ticket-severity-item__badge-${level}`
    }
}

export default TicketSeverityItem