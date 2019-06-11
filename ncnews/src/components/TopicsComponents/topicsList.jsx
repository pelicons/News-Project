import React, { Component } from 'react';
import { getTopics } from '../../api';
import { Link, Router } from "@reach/router";
import ArticlesByTopic from '../ArticleComponents/ArticlesByTopic';
import { Error } from '../Error'
import PostTopicComponent from './postTopicsComponent'
import './topics.css'
import TopicsMenuCard from './TopicsMenuCard';

class TopicsList extends Component {
    state = {
        importedTopics: [],
        err: null
    }


    render() {
        const { err } = this.state;
        if (err) {
            return <Error err={err} />;
        }

        return (
            <div>
                <br></br>
                <PostTopicComponent importedTopics={this.state.importedTopics} currentUserLogin={this.props.currentUserLogin} updateTopicsWhenPosted={this.updateTopicsWhenPosted} />

                <Router>
                    <ArticlesByTopic topicsID={this.props} path="/:topic" />
                </Router>
                <div>
                    <TopicsMenuCard topics={this.state.importedTopics}/>
                </div>


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



    updateTopicsWhenPosted = (newTopicsArray) => {
        this.setState({ importedTopics: newTopicsArray })

    }


}







export default TopicsList;

