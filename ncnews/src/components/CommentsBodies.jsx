import React, { Component } from 'react';
import { getComments } from '../api';

class CommentsBodies extends Component {
    state = {
        commentsBody: []

    }

    render() {
        console.log(this.state.commentsBody, "state");
        return (
            <div>
                {this.state.commentsBody.map((comment) => {
                    return (<div>
                        <ul>
                            <li>{comment.article_id}</li>
                            <li>{comment.author}</li>
                            <li>{comment.body}</li>
                            <li>{comment.comment_id}</li>
                            <li>{comment.created_at}</li>
                            <li>{comment.votes}</li>
                        </ul>
                    </div>
                    )
                })}
            </div>
        );
    }
    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            getComments(this.props).then((res) => {
                console.log(res.data.comments, "res.data.comments");
                this.setState({ commentsBody: res.data.comments })
            })
        }
    }
}

export default CommentsBodies;