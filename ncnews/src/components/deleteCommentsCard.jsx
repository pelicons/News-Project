import React, { Component } from 'react';
import { deleteComment, patchCommentVotes } from '../api';



class DeleteCommentCard extends Component {

    state = {
        votes: 0
    }
    render() {

        return (
            //destructure this.props.comment
            <ul key={this.props.comment.article_id} >
                <li>{this.props.comment.article_id} article id</li>
                <li>{this.props.comment.author} author</li>
                {this.props.comment.author ===
                    this.props.currentUserLogin &&
                
                        <div>
                            <button onClick={this.deleteClicked}>delete</button>



                            <button class="voteStyle" disabled={this.state.votes === 1}

                                onClick={() => { this.HandleVote(1) }}>UP<br></br><b>{this.props.comment.votes + 1}</b></button>

                            <button class="voteStyle" disabled={this.state.votes === -1}
                                onClick={() => { this.HandleVote(-1) }}>DOWN<br></br><b>{this.props.comment.votes - 1}</b></button>
                        </div>
                    

                }


                <li>{this.props.comment.body} </li>
                <li>{this.props.comment.comment_id} comment id</li>
                <li>{this.props.comment.created_at} created at</li>
                <li>{this.props.comment.votes + this.state.votes} votes</li>

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
    HandleVote = (direction) => {

        let stateVoteLimiter = this.state.votes + direction;

        this.setState({ votes: stateVoteLimiter })



        patchCommentVotes(direction, this.props.comment.article_id).catch((err) => {
            console.log(err);

            patchCommentVotes(-direction, this.props.comment.article_id).catch((err) => {
                console.log(err);
            }); //ask whether this works
        })


    }

}






export default DeleteCommentCard;