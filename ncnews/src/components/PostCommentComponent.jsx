import React, { Component } from 'react';
import { postComment } from '../api'

class PostCommentComponent extends Component {

    state = {
        author: '',
        body: ''

    }

    render() {

        return (

            < div >

                {this.props.currentUserLogin !== null &&
                    <form onSubmit={this.submitComment} >
                        <label>
                            Comment:
              <input
                                id="comment"
                                type="text"
                                value={this.state.body}
                                onChange={this.handleChange}
                            />
                        </label>
                        <input type="submit" value="Submit" />
                    </form >
                }
            </div >

        );
    }
    handleChange = event => {
        this.setState({
            body: event.target.value,
            author: this.props.currentUserLogin
        });
        setTimeout(() => {
            console.log(this.state.value);
        }, 4 * 100);
    };
    submitComment = (event) => {
        const currentAuthor = this.props.currentUserLogin;
        const currentBody = this.state.body;

        event.preventDefault();


        postComment(currentAuthor, currentBody, this.props.id).then((res) => {
            console.log(res.data);
          
            this.props.AddCommentState(res.data.comment);
        })
    }
}





export default PostCommentComponent;
