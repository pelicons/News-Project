import React, { Component } from 'react';
import { getTopics } from '../api';
import { Link, Router } from "@reach/router";
import ArticlesByTopic from './ArticlesByTopic';
import { Error } from './Error'


class TopicsList extends Component {
    state = {
        importedTopics: [],
        err: null
    }


    render() {
        const { err, currentUserLogin } = this.state;
        if (err) return <Error />
        console.log(err);
        return (
            <div>
                <Router>
                    <ArticlesByTopic topicsID={this.props} path="/:topic" />
                </Router>
                <ul>
                    {this.state.importedTopics.map((topic) => {
                        return <Link to={`/topics/${topic.slug}`}>
                            <li key={topic.slug}>
                                {topic.slug}</li>
                        </Link>
                    })}
                </ul>

            </div>
        );
    }


    componentDidMount() {
        getTopics(this.props).then((res) => {
            this.setState({ importedTopics: res.data.topics })
        }).catch((err) => {
            this.setState({ err });
        })
    }
}







export default TopicsList;

