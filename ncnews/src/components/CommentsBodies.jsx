import React, { Component } from 'react';
import { getComments, deleteComments } from '../api';
import DeleteCommentCard from '../components/deleteCommentsCard'


class CommentsBodies extends Component {
    state = {
        commentsBody: []

    }

    render() {

        return (
            <div>
                {this.state.commentsBody.map((comment) => {
                    return (<div>
                        <DeleteCommentCard comment={comment} currentUserLogin={this.props.currentUserLogin} />
                    </div>
                    )
                })}
            </div>
        );
    }

    componentDidMount() {
        getComments(this.props).then((res) => {
            console.log(res.data.comments, "res.data.comments");
            this.setState({ commentsBody: res.data.comments })
        })
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