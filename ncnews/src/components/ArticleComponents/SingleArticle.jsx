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

            <div id="single-article">
                <br></br>
                <br></br>
                <b>Title:  </b>{this.state.individualArticle.title}
                <br></br>
                <b>Author:  </b>{this.state.individualArticle.author}
                <br></br>
                <b>Topic:  </b>{this.state.individualArticle.topic}
                <br></br>
                <br></br>
                {/* <button disabled={voteChange === 1} onClick={() => this.handleVote(1)}></button> */}
                <b>Body: </b>{this.state.individualArticle.body}
                <br></br>
                <br></br>

                <b>Created_at:  </b>{this.state.individualArticle.created_at}
                <br></br>

                <b>Votes:  </b>{this.state.individualArticle.votes}
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
                <div>

                </div>

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