import React, { Component } from 'react'
import './style.css'

class Auth0Spinner extends Component {

    constructor(props)
    {
        super(props)
        this._getSpinnerType = this._getSpinnerType.bind(this)
        this._show = this._show.bind(this)
    }

    render() {
        return (<div className={this._getSpinnerType(this.props.option, this.props.show)}>
            <div className="circle"></div>
        </div>)
    }


    _getSpinnerType(option, show)
    {
        switch(option)
        {
            case 'xs': return this._show('spinner  spinner-xs')
            case 'sm': return this._show('spinner  spinner-sm')
            case 'md': return this._show('spinner  spinner-md is-auth0')
            case 'lg': return this._show('spinner  spinner-lg is-auth0')
            default: return this._show('spinner  spinner-xs') 
        }
    }

    _show(currentClasses, show)
    {
        return `${currentClasses}`
    }
}

export default Auth0Spinner