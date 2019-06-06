import React, { Component } from 'react';
import { postComment } from '../api'

class PostCommentComponent extends Component {

    state = {
        author: '',
        body: ''

    }

    render() {
        console.log(this.props.loginStatus);
        return (

            < div >
                {this.props.loginStatus &&
                    < form onSubmit={this.submitComment} >
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
            author: this.props.loginStatus
        });
        setTimeout(() => {
            console.log(this.state.value);
        }, 4 * 100);
    };
    submitComment = (event) => {
        const currentAuthor = this.props.loginStatus;
        const currentBody = this.state.body;
        
        event.preventDefault();


        postComment(currentAuthor, currentBody, this.props.id).then((res) => {
            console.log(res);
        })
    }
}





export default PostCommentComponent;
