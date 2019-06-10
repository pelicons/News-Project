import React, { Component } from 'react';
import { getArticlesByUser } from '../api';

class UserPage extends Component {
    state = {
        currentUserLogin: this.props.userinfo.currentUserLogin,
        articlesByUser: []

    }
    render() {
        console.log(this.props.userinfo);
        console.log(this.state.articlesByUser);
        return (
            <div>
                <b>{this.props.userinfo.currentUserLogin}</b>
                <br></br>

                <img src={this.props.userinfo.avatar_url} width="50" height="50" alt="avatar"></img>
                {console.log(this.props.userinfo.avatar_url)}
                <br></br>
                <b>{this.props.userinfo.name}</b>
                <br></br>
                <b>Articles By this user:</b>
                <div>{this.state.articlesByUser.map((article) => {
                    return <h1>{article.title}</h1>
                })}
                </div>

            </div>
        );
    }

    componentDidMount() {
        console.log(this.state.articlesByUser);
        getArticlesByUser(this.props.userinfo.currentUserLogin).then((res) => {

            this.setState({

                articlesByUser: res.data.articles
            })
        })
    }


    // }
    // componentDidUpdate(prevProps, prevState) {

    //     if (this.state.articlesByUser.length !== prevState.articlesByUser.length) {
    //         getArticlesByUser(this.props.userinfo.currentUserLogin).then((res) => {
    //             console.log(res, "updateres");
    //             this.setState({ articlesByUser: res.data.articles })
    //         })
    //     }
    // }

}
// // }

export default UserPage;