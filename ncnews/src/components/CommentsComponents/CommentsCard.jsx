import React, { Component } from 'react';
import { deleteComment, patchCommentVotes } from '../../api';
import './Comments.css';
// import { Button, ButtonToolBar } from 'react-bootstrap/Button';

// Button breaks app



class CommentCard extends Component {
    //no matter what you call this class above commentsbodies uses it as if it were called CommentsCard?
    state = {
        votes: 0,

    }
    render() {

        return (
            //destructure this.props.comment
            <ul id="singleComment" key={this.props.comment.article_id} >
                <li>{this.props.comment.article_id} article id</li>
                <li>{this.props.comment.author} author</li>
                {this.props.comment.author ===
                    this.props.currentUserLogin &&

                    <div>

                        <button variant="primary" onClick={this.deleteClicked}>delete</button>


                    </div>
                } <div>
                    <button class="arrow" disabled={this.state.votes === 1}

                        onClick={() => { this.HandleVote(1) }}>UP<br></br><b>{+1}</b></button>

                    <button class="voteStyle" disabled={this.state.votes === -1}
                        onClick={() => { this.HandleVote(-1) }}>DOWN<br></br><b>{-1}</b></button>

                </div>





                <li>{this.props.comment.body} </li>
                <li>{this.props.comment.comment_id} comment id</li>
                <li>created at: {this.props.comment.created_at.split('').slice(0, 10).join('')}</li>
                <li>{this.props.comment.votes + this.state.votes} votes</li>
                <h2></h2>

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


        this.setState({
            votes: stateVoteLimiter,

        })



        patchCommentVotes(direction, this.props.comment.comment_id).catch((err) => {
            console.log(err);

            patchCommentVotes(-direction, this.props.comment.comment_id).catch((err) => {
                console.log(err);
            }); //ask whether this works
        })


    }

}






export default CommentCard;