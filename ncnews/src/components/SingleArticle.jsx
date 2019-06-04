import React, { Component } from 'react';
import { getArticle } from '../api';




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
            </div>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        
        // console.log(this.st);
        if (this.props.id !== prevProps.id) {
            getArticle(this.props.id).then((res) => {
                console.log({res});
                this.setState({ individualArticle: res.data.article })
            })
        }
    }
    
}

export default SingleArticle;