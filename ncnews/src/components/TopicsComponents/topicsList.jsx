import React, { Component } from 'react';
import { getTopics } from '../../api';
import { Link, Router } from "@reach/router";
import ArticlesByTopic from '../ArticleComponents/ArticlesByTopic';
import { Error } from '../Error'
import PostTopicComponent from './postTopicsComponent'

class TopicsList extends Component {
    state = {
        importedTopics: [],
        err: null
    }


    render() {
        const { err, currentUserLogin } = this.state;
        if (err) return <Error />
        
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
                <PostTopicComponent importedTopics={this.state.importedTopics} currentUserLogin={this.props.currentUserLogin} />

            </div>
        );
    }


    componentDidMount() {
        getTopics().then((res) => {
            console.log(res.data.topics, "hello")
            this.setState({ importedTopics: res.data.topics })
        }).catch((err) => {
            this.setState({ err });
        })
    }
}







export default TopicsList;

