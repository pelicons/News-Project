import React, { Component } from 'react';
import { getArticle, getComments } from '../api';
import CommentsBodies from '../components/CommentsBodies'




class SingleArticle extends Component {
    state = {
        individualArticle: []

    }
    render() {
        return (
            // <div>
            //     <CommentsOnArticle updateCommentsBody={this.updateCommentsBody} />
            // </div>
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