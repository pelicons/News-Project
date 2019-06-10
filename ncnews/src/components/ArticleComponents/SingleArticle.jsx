import React, { Component } from 'react';
import { getArticle, patchVotes } from '../../api';
import CommentsBodies from '../CommentsComponents/CommentsBodies'





class SingleArticle extends Component {
    state = {
        individualArticle: [],
        votes: 0

    }
    render() {

        console.log(this.state.individualArticle)

        return (

            <div>
                Title:{this.state.individualArticle.title}
                <br></br>
                {/* <button disabled={voteChange === 1} onClick={() => this.handleVote(1)}></button> */}
                Body: {this.state.individualArticle.body}
                <br></br>
                Author:{this.state.individualArticle.author}
                <br></br>
                Created_at:{this.state.individualArticle.created_at}
                <br></br>
                Topic:{this.state.individualArticle.topic}
                <br></br>
                Votes:{this.state.individualArticle.votes}
                <br></br>


                {this.props.currentUserLogin &&
                    <div>
                        <button disabled={this.state.votes === 1} onClick={() => { this.HandleVote(1) }}>UP<br></br><b>{this.state.individualArticle.votes + 1}</b></button>
                        <button disabled={this.state.votes === -1} onClick={() => { this.HandleVote(-1) }}>DOWN<br></br><b>{this.state.individualArticle.votes - 1}</b></button>
                    </div>
                }
                <br></br>
                {this.state.individualArticle.comment_count}
                <br></br>

                <div>


                </div>
                <CommentsBodies id={this.props.id} currentUserLogin={this.props.currentUserLogin} />
                <br></br>
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
                this.setState({
                    votes: 0,
                    individualArticle: res.data.article
                })

            })
        }
    }


    HandleVote = (direction) => {
        let stateVoteLimiter = this.state.votes + direction;
        let newArticleVotes = this.state.individualArticle.votes + direction
        let stateCopy = this.state.individualArticle
        stateCopy.votes = newArticleVotes



        this.setState({ votes: stateVoteLimiter, individualArticle: stateCopy })

        patchVotes(direction, this.props.id).catch((err) => {
            console.log(err);

            patchVotes(-direction, this.props.id); //ask whether this works
        })


    }
}

export default SingleArticle;