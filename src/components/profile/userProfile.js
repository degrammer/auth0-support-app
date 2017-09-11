import React, {Component} from 'react'


class UserProfile extends Component
{
    render()
    {  
        return (<div className="auth0-user-profile">
        <img src={this.props.userPhoto} />
        <span className="profile-user-full-name"> {this.props.userFullName}</span>
        <span className="profile-caret icon icon-budicon-460"></span>
        </div>)
    }
}

export default UserProfile