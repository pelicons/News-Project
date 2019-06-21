import React, { Component } from 'react';
import { getArticlesByUser } from '../api';
import { Link } from "@reach/router";

class UserPage extends Component {
    state = {
        currentUserLogin: this.props.userinfo.currentUserLogin,
        articlesByUser: []

    }
    render() {
        return (
            <div>
                <b>{this.props.userinfo.currentUserLogin}</b>
                <br></br>

                <img src={this.props.userinfo.avatar_url} width="50" height="50" alt="avatar"></img>
                <br></br>
                <b>{this.props.userinfo.name}</b>
                <br></br>
                <b>Articles By this user:</b>
                <div>{this.state.articlesByUser.map((article) => {
                    return <Link to={`/${article.article_id}`}>
                        <b>{article.title}</b>
                        <br>
                        </br>

                    </Link>

                })}
                </div>

            </div>
        );
    }

    //     componentDidMount() {


    //         getArticlesByUser(this.props.userinfo.currentUserLogin).then((res) => {

    //             this.setState({

    //                 articlesByUser: res.data.articles,
    //                 currentUserLogin: res.data.username
    //             })

    //         })

    //     }
    // }


    componentDidUpdate(prevProps, prevState) {

        if (this.state.articlesByUser.length !== prevState.articlesByUser.length) {
            getArticlesByUser(this.props.userinfo.currentUserLogin).then((res) => {

                this.setState({

                    articlesByUser: res.data.articles,
                    currentUserLogin: res.data.username
                })
                //  getArticlesByUser(this.props.userinfo.currentUserLogin).then((res) => {
                //      console.log(res, "updateres");
                //      this.setState({ articlesByUser: res.data.articles })
            })
        }
    }
}
        // }

        export default UserPage;