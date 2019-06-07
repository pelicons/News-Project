import React, { Component } from 'react';
import { deleteComment } from '../api';



class DeleteCommentCard extends Component {

    state = {
        votes: 0
    }
    render() {

        return (
            //destructure this.props.comment
            <ul key={this.props.comment.article_id} >
                <li>{this.props.comment.article_id}</li>
                <li>{this.props.comment.author}</li>
                {this.props.comment.author ===
                    this.props.currentUserLogin &&
                    <button onClick={this.deleteClicked}>delete</button>         //disabled ul
                }
                <li>{this.props.comment.body}</li>
                <li>{this.props.comment.comment_id}</li>
                <li>{this.props.comment.created_at}</li>
                <li>{this.props.comment.votes}</li>
                <button disabled={this.state.votes === 1} onClick={() => { this.props.HandleVote(1) }}>UP<br></br><b>{this.props.comment.votes + 1}</b></button>
                <button disabled={this.state.votes === -1} onClick={() => { this.props.HandleVote(-1) }}>DOWN<br></br><b>{this.props.comment.votes - 1}</b></button>
            </ul >

        );
    }
    deleteClicked = () => {
        deleteComment(this.props.comment.comment_id).then((res) => {
            console.log(res);
        })
        this.props.commentsFilter(this.props.comment.comment_id);
        console.log(this.props.comment.comment_id)

    }

}






export default DeleteCommentCard;