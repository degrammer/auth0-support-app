import React, { Component } from 'react'
import TicketSeverityItem from './ticketSeverityItem'
import severityItemCollection from './data/severityItemCollection.json'

class TicketSeverityChooser extends Component {
    
    constructor(props)
    {
        super(props)
        this._setSeverity = this._setSeverity.bind(this)
        this.state = {severity: 0}
    }

    render() {

        if (severityItemCollection && severityItemCollection.length) {

            const items = severityItemCollection.map((item, index) => <TicketSeverityItem click={this._setSeverity} selected={item.id === this.state.severity} id={item.id} level={item.level} title={item.title} description={item.description} key={index} />)

            return (<div className="auth0-ticket-severity-chooser">{items}<div className="clear"></div></div>)
        }

        return null
    }

    _setSeverity(event,level)
    {   
      this.setState({severity: level})
      
      if(this.props.onSeveritySelected) this.props.onSeveritySelected(level)
    }

   
}

export default TicketSeverityChooser