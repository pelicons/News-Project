import React, { Component } from 'react';
import axios from 'axios';

class LoginPage extends Component {
    state = {
        userInput: ''
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => event.preventDefault()}>
                    <input type='text' onChange={this.updateUserInput} />
                    <button onClick={(event) => {
                        this.props.changeLogin(this.state.userInput)
                    }}>Login Info</button>

                </form>
            </div >
        );
    }
    updateUserInput = (event) => {
        this.setState({ userInput: event.target.value })
    }
}

export default LoginPage;