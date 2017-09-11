import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

class RequestSelector extends Component {
    render() {

        let countryOptions = [ { key: '0', value: '0', text: 'John Doe (john.doe@company.com)' },{ key: '1', value: '1', text: 'John Doe 2 (john.doe@company.com)' }]

        return (<Dropdown placeholder='Choose a requester'  noResultsMessage='No more requesters found.' fluid multiple search selection options={countryOptions}>
                
        </Dropdown>)
    }


    logChange(val) {
        console.log(val)
    }
}

export default RequestSelector