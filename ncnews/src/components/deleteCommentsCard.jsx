import React, { Component } from 'react';
import { deleteComment } from '../api';



class DeleteCommentCard extends Component {

    render() {

        return (
            <ul key={this.props.comment.article_id} >
                <li>{this.props.comment.article_id}</li>
                <li>{this.props.comment.author}</li>
                {this.props.comment.author ===
                    this.props.currentUserLogin &&
                    <button onClick={this.deleteClicked}>delete</button>

                }
                <li>{this.props.comment.body}</li>
                <li>{this.props.comment.comment_id}</li>
                <li>{this.props.comment.created_at}</li>
                <li>{this.props.comment.votes}</li>
            </ul >

        );
    }
    deleteClicked = () => {
        deleteComment(this.props.comment.comment_id).then((res) => {
            console.log(res);
        })
    }

}



export default DeleteCommentCard;