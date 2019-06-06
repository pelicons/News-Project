import React, { Component } from 'react';
import { getTopics } from '../api';
import { Link, Router } from "@reach/router";
import ArticlesByTopic from './ArticlesByTopic';


class TopicsList extends Component {
    state = {
        importedTopics: []
    }


    render() {

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
        })
    }


}




export default TopicsList;

