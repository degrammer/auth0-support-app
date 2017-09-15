import React, { Component } from 'react'

class TicketListItem extends Component {


    constructor(props)
    {
        super(props)

        this.getBadge = this.getBadge.bind(this)
    }

    render() {
        return (

            <div className="auth0-ticket-list-item">
                <div className="auth0-ticket-severity-item__badge_container pull-left">
                    <span className={this.getBadge(this.props.level)}>{this.props.level}</span>
                </div>
                <div className="auth0-ticket-severity-item_details pull-right auth0-ticket-item-details">
                    <span className="auth0-ticket-severity-item__title">{this.props.title}</span>
                    <p className="auth0-ticket-severity-item__description">{this.props.description}</p>
                      <a target="_blank" rel="noopener" className="btn btn-transparent" href={`https://metacode.zendesk.com/agent/tickets/${this.props.id}`}>View on zendesk</a>
             
                </div>
                   <div className="clear"></div>
            </div>
        )
    }

     getBadge(level) {
        
        return `label label-default`
    }
}

export default TicketListItem