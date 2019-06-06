import React, { Component } from 'react';

class PostCommentComponent extends Component {

    state = {
        author: '',
        body: ''
    }

    render() {
        console.log(this.props, "post comment test");
        return (
            <div>
            </div >
        );

    };
}





export default PostCommentComponent;
