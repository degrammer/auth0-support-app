import React, { Component } from 'react'
import TicketListItem from './ticketListItem'
import TicketServices from './data/ticketServices'
import Callback from '../callback/callback'
import './style.css'


class TicketList extends Component {

    constructor(props) {
        super(props)

        this.ticketServices = new TicketServices()
        this._getTickets = this._getTickets.bind(this)
        this._getProfile = this._getProfile.bind(this)
        this.state = { tickets: [] }

    }

    componentDidMount() {
        this._getProfile((tickets) => {

            this.setState({ tickets: tickets.data.results, fetching: false })
        })
    }


    _getTickets(requesterEmail) {
        return this.ticketServices.getTickets(requesterEmail)
    }

    render() {

        return (<div className="auth0-tickets-list">  <div className="item-header"><h1 className="pull-left">Support Tickets</h1> <a className="btn btn-success btn-lg pull-right" href="/tickets"><i className="icon icon-budicon-473"></i>New ticket</a><div className="clear"></div></div>

            <ul className="nav nav-tabs">
                <li className="active"><a>My Tickets</a></li>


            </ul>
            {!this.state.fetching && !this.state.tickets.length &&
                <div className="empty-tickets"><p>There are no tickets.</p></div>}
            {this.state.fetching && <Callback />}
            {this.state.tickets.map((ticket) =>
                <TicketListItem key={ticket.id} id={ticket.id} description={ticket.description} title={ticket.subject} level={ticket.status} url={ticket.url} />)}

        </div>)
    }

    _getProfile(onTicketsResponse) {

        const { getProfile } = this.props.auth;

        this.setState({ fetching: true })

        return getProfile((err, response) => {

            this._getTickets(response.email).then(onTicketsResponse)
        })
    }

}

export default TicketList