import React, { Component } from 'react'
import TicketSeverityItem from './ticketSeverityItem'
import severityItemCollection from './severityItemCollection.json'

class TicketSeverityChooser extends Component {
    render() {

        if (severityItemCollection && severityItemCollection.length) {

            const items = severityItemCollection.map((item, index) => <TicketSeverityItem level={item.level} title={item.title} description={item.description} key={index} />)

            return (<div className="auth0-ticket-severity-chooser">{items}<div className="clear"></div></div>)
        }

        return null
    }
}

export default TicketSeverityChooser