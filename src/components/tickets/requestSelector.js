import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import TicketServices from './data/ticketServices'

class RequestSelector extends Component {

    constructor(props) {

        super(props)
        this.ticketServices = new TicketServices()
        this.fetchData = this.fetchData.bind(this)
        this._mapRequesters = this._mapRequesters.bind(this)
        this._getDropdown = this._getDropdown.bind(this)
        this._handleChange = this._handleChange.bind(this)
        this.state = { fetching: true, requesters: [] }

    }

    componentWillMount() {
        this.fetchData()
    }

    _handleChange(e, element) {

        if (this.props.onCollaboratorSelected) this.props.onCollaboratorSelected(element.value)

    }

    fetchData() {
        this.ticketServices.getRequesters()
            .then((response) => {
                if (response && response.data) {
                    this.setState({ fetching: false, requesters: this._mapRequesters(response.data) })
                }

            }).catch((err) => {

            })
    }

    _mapRequesters(requesters) {
        return requesters.map((requester, index) => {

            return { key: index, value: `${requester.name}_${requester.email}`, text: `${requester.name} <${requester.email}>` }
        })
    }


    render() {

        return (
            <div>
  
                {this._getDropdown()}

            </div>
        )
    }

    _getDropdown() {
        return <Dropdown onChange={this._handleChange} loading={this.state.fetching} disabled={this.state.fetching} placeholder='Choose a requester' noResultsMessage='No more requesters found.' fluid multiple search selection options={this.state.requesters}></Dropdown>
    }




    logChange(val) {
        console.log(val)
    }
}

export default RequestSelector