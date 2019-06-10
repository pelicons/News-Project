import React, { Component } from 'react';
import '../style/Login.css';
import { Error } from './Error'
// import Button from 'react-bootstrap/Button';

class LoginPage extends Component {
    state = {
        userInput: '',
        err: null
    }

    render() {

        return (
            <div id="Login">
                {!this.props.currentUserLogin &&
                    <form id="login-button" onSubmit={this.submitInput}>
                        <input type='text' required={true} onChange={this.updateUserInput} />
                        <button><i><b>Login</b></i></button>


                    </form>
                }
                {this.props.currentUserLogin &&
                    <div id="Login">
                        <button value={null} onClick={this.submitInput}> <i><b>Logout</b></i> </button>

                    </div>
                }
            </div >
        );
    }
    updateUserInput = (event) => {
        this.setState({ userInput: event.target.value })
    }


    submitInput = (event) => {

        event.preventDefault();


        if (this.state.userInput === this.props.currentUserLogin) {
            return this.props.changeLogin(null);
        } else {

            return this.props.changeLogin(this.state.userInput)
        }
    }
}

export default LoginPage;