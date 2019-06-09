import React, { Component } from 'react';
import { Link } from "@reach/router";
import SortComponent from '../SortComponent';
import { getSortedTopicsByArticle, getArticlesByTopics } from '../../api'



class ArticlesByTopic extends Component {
    state = {
        articlesByTopic: []
    }
    componentDidMount() {
        getArticlesByTopics(this.props.topic).then((res) => {
            this.setState({ articlesByTopic: res.data.articles })
        })

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.topic !== this.props.topic) {
            getArticlesByTopics(this.props.topic).then((res) => {
                this.setState({ articlesByTopic: res.data.articles })
            })
        }

    }
    render() {
        return (
            //SortComponent also child of ArticlesList which isn't allowed? Delete SortedArticles and SortComponent from this file
            <div>
                <SortComponent SortedArticles={this.SortedArticles} />
                <ul>
                    {this.state.articlesByTopic.map((article) => {
                        console.log(article);
                        return <Link to={`/${article.article_id}`}>
                            <li key={article._id}>
                                {article.title} 
                            </li>
                        </Link>
                        
                    })}
                </ul>
                <br></br>
            </div>
        );
    }
    SortedArticles = (query) => {
        getSortedTopicsByArticle(this.props.topic, query).then((res) => {
            this.setState({ articlesByTopic: res.data.articles })
            console.log(res.data.articles, "articles by topic");

        })
    }
}

export default ArticlesByTopic;