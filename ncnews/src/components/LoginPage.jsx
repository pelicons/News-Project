import React, { Component } from 'react';


class LoginPage extends Component {
    state = {
        userInput: ''
    }

    render() {

        return (
            <div>
                {!this.props.currentUserLogin &&
                    <form onSubmit={this.submitInput}>
                        <input type='text' onChange={this.updateUserInput} />
                        <button><i><b>Login</b></i></button>


                    </form>
                }
                {this.props.currentUserLogin &&
                    <div>
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