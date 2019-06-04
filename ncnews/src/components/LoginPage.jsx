import React, { Component } from 'react';
import axios from 'axios';

class LoginPage extends Component {
    state = {
        userInput: ''
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitInput}>
                    <input type='text' onChange={this.updateUserInput} />
                    <button 
                    >Login Info</button>

                </form>
            </div >
        );
    }
    updateUserInput = (event) => {
        this.setState({ userInput: event.target.value })
    }
    submitInput = (event) => {
        event.preventDefault();
        this.props.changeLogin(this.state.userInput)
    }
}

export default LoginPage;