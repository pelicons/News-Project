import React, { Component } from 'react';
import { getTopics } from '../api';
import axios from 'axios';


class TopicsList extends Component {
    state = {
        importedTopics: []
    }




    render() {
        console.log(this.state.importedTopics);
        return (
            <div>
                <ul>
                    {this.state.importedTopics.map((topic) => {
                        return <li key={topic.slug}>{topic.slug}</li>
                    })}
                </ul>

            </div>
        );
    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevState);
    //     if (prevState.importedTopics !== this.state.importedTopics) {
    componentDidMount() {
        getTopics().then((res) => {
            console.log(res.data.topics);
            this.setState({ importedTopics: res.data.topics })
        })
    }


}




export default TopicsList;

