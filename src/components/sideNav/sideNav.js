import React, { Component } from 'react'
import SideNavItem from './sideNavItem'
import './style.css'

class SideNav extends Component {

    render() {
        return (<div className="auth0-sideNav">
            <h1 className="brand"><a href="/"><span className="brand__logo"></span><span className="brand__internal">Internal Tool</span></a></h1>
            <ul>{this.getInternalToolNavItems()}</ul>
            <h1 className="tool-title">External Tools </h1>
            <ul>{this.getExternalToolNavItems()}</ul>
        </div>)
    }


    getInternalToolNavItems() {

        return (
            [<SideNavItem text="Overview" key="1" icon="icon-budicon-394" />,
            <SideNavItem text="Notifications" key="2" icon="icon-budicon-322"  />,
            <SideNavItem text="Tenants" key="3" icon="icon-budicon-299"  />,
            <SideNavItem text="Resource request" key="4" icon="icon-budicon-394"  />,
            <SideNavItem text="tasks" key="5" icon="icon-budicon-393"  />,
            <SideNavItem text="Tickets" selected="true" key="6" icon="icon-budicon-73"  />]
        )
    }

    getExternalToolNavItems() {

        return (
            [<SideNavItem text="Zendesk" key="1" icon="icon-budicon-441"  />,
            <SideNavItem text="Salesforce" key="2" icon="icon-budicon-156"  />,
            <SideNavItem text="Forum" key="3" icon="icon-budicon-792"  />,
            <SideNavItem text="Wiki" key="4" icon="icon-budicon-716"   />]
        )
    }

}

export default SideNav