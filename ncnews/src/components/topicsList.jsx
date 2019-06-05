import React, { Component } from 'react';
import { getTopics } from '../api';
import axios from 'axios';
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

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevState);
    //     if (prevState.importedTopics !== this.state.importedTopics) {
    componentDidMount() {
        getTopics(this.props).then((res) => {
            this.setState({ importedTopics: res.data.topics })
        })
    }


}




export default TopicsList;

