import React, { Component } from 'react';
import { getArticle } from '../api';
import CommentsBodies from '../components/CommentsBodies'
import { patchVotes } from '../api'




class SingleArticle extends Component {
    state = {
        individualArticle: [],
        votes: 0

    }
    render() {
        console.log(this.state.individualArticle, "111111111111")
        console.log(this.state.individualArticle.votes, "222222222")


        return (

            <div>
                {this.state.individualArticle.title}
                <br></br>
                {/* <button disabled={voteChange === 1} onClick={() => this.handleVote(1)}></button> */}
                {this.state.individualArticle.body}
                <br></br>
                <button disabled={this.state.votes === 1} onClick={() => { this.HandleVote(1) }}>UP<br></br><b>{this.state.individualArticle.votes + 1}</b></button>
                <button disabled={this.state.votes === -1} onClick={() => { this.HandleVote(-1) }}>DOWN<br></br><b>{this.state.individualArticle.votes - 1}</b></button>
                <br></br>
                comment count delete eventually
                <br></br>
                {this.state.individualArticle.comment_count}
                <br></br>
                <CommentsBodies id={this.props.id} currentUserLogin={this.props.currentUserLogin} />
                <br></br>
                <div>


                </div>

            </div>
        );
    }
    componentDidMount(prevProps, prevState) {
        getArticle(this.props.id).then((res) => {
            this.setState({ individualArticle: res.data.article })
        })

    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.id !== prevProps.id) {
            getArticle(this.props.id).then((res) => {
                this.setState({ individualArticle: res.data.article })

            })
        }
    }


    HandleVote = (direction) => {
        let stateVoteLimiter = this.state.votes + direction;
        let newArticleVotes = this.state.individualArticle.votes + direction
        let copy = this.state.individualArticle
        copy.votes = newArticleVotes


    
        this.setState({ votes: stateVoteLimiter, individualArticle: copy })

        patchVotes(direction, this.props.id).catch((err) => {
            console.log(err);

            patchVotes(-direction, this.props.id); //ask whether this works
        })


    }
}

export default SingleArticle;