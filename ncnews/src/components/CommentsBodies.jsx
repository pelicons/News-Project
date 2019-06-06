import React, { Component } from 'react';
import { getComments } from '../api';
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
                        <DeleteCommentCard comment={comment} currentUserLogin={this.props.currentUserLogin} commentsFilter={this.commentsFilter} />
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
    commentsFilter = (commentsID) => {

        console.log(commentsID);
        const filteredComments = this.state.commentsBody.filter(comment => comment.comment_id !== commentsID);
        console.log({filteredComments});
        this.setState({ commentsBody: filteredComments })
    }
}




export default CommentsBodies;