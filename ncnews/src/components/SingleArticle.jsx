import React, { Component } from 'react';
import { getArticle } from '../api';
import CommentsBodies from '../components/CommentsBodies'
import PostCommentComponent from './PostCommentComponent.jsx'




class SingleArticle extends Component {
    state = {
        individualArticle: []

    }
    render() {
        return (

            <div>
                {this.state.individualArticle.title}
                <br></br>
                {this.state.individualArticle.body}
                <br></br>
                {this.state.individualArticle.votes}
                <br></br>
                {this.state.individualArticle.comment_count}
                <br></br>
                <CommentsBodies id={this.props.id} />
                <br></br>
                <div>
                    <PostCommentComponent id={this.props.id} loginStatus={this.props.loginStatus} />
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

}

export default SingleArticle;