import React, { Component } from 'react';

class UserPage extends Component {
    state = {
        currentUserLogin: this.props.userinfo.currentUserLogin
    }
    render() {
        console.log(this.props.userinfo);
        return (
            <div>
                <b>{this.props.userinfo.currentUserLogin}</b>
                <br></br>
                <b>{this.props.userinfo.avatar_url}</b>
                <br></br>
                <b>{this.props.userinfo.name}</b>
            </div>
        );
    }
}

export default UserPage;