import React, { Component } from 'react'
class Displayable extends Component {

    constructor(props) {
        super(props)
        this._show = this._show.bind(this)
    }

    render() {

        return (<div className={this._show(this.props.show)}>

            {this.props.element}
        </div>)
    }

    _show(show) {
        if (!show) return "auth0-invisible"

        return ""
    }
}

export default Displayable