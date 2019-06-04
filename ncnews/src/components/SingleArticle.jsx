import React, { Component } from 'react';
import { getArticle, getComments } from '../api';




class SingleArticle extends Component {
    state = {
        individualArticle: [],
        commentsBodies: []
    }
    render() {
        console.log(this.state.commentsBodies, "++++");
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
                {this.state.commentsBodies}
                <br></br>
            </div>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        //promise all
        if (this.props.id !== prevProps.id) {
            getArticle(this.props.id).then((res) => {
                console.log(res);
                this.setState({ individualArticle: res.data.article })
            }).then(() => {
                getComments(this.props.id).then((result) => {

                    // never being invoked
                    this.setState({ commentsBodies: result })

                })

            })
        }
    }

}

export default SingleArticle;