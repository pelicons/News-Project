import React, { Component } from 'react';
import { getArticle } from '../api';
import CommentsBodies from '../components/CommentsBodies'
import PostCommentComponent from './PostCommentComponent.jsx'
import { patchVotes } from '../api'




class SingleArticle extends Component {
    state = {
        individualArticle: [],
        votes: 0

    }
    render() {
        console.log(this.state.individualArticle)


        return (

            <div>
                {this.state.individualArticle.title}
                <br></br>
                {/* <button disabled={voteChange === 1} onClick={() => this.handleVote(1)}></button> */}
                {this.state.individualArticle.body}
                <br></br>
                <button>{this.state.individualArticle.votes}</button>
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
        console.log(this.props.id);
        console.log(direction);
        patchVotes(direction, this.props.id).then((res => {
            console.log(res);

        }))
    }

}

export default SingleArticle;