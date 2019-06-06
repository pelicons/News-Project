import React, { Component } from 'react';
import { postComment } from '../api'

class PostCommentComponent extends Component {

    state = {
        body: ''
    }

    render() {
        console.log(this.props.loginStatus);
        return (

            < div >
                {this.props.loginStatus &&
                    < form onSubmit={postComment} >
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
        this.setState({ body: event.target.value });

        setTimeout(() => {
            console.log(this.state.name);
        }, 4 * 100);
    };
}





export default PostCommentComponent;
