import React, { Component } from 'react'


class SideNavItem extends Component {

    render() {
        return (<li className={this.getClassName(this.props.selected)}><a href={this.props.url}><i className={this.getIcon(this.props.icon)}></i>{this.props.text}</a></li>)
    }


    getClassName(selected) {
        return selected ? "active" : ""
    }

    getIcon(icon) {
        if (icon) return `icon ${icon}`

        return 'icon'
    }
}

export default SideNavItem