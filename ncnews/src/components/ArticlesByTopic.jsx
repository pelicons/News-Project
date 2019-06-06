import React, { Component } from 'react';
import { getArticlesByTopics } from '../api';
import { Link } from "@reach/router";
import SortComponent from '../components/SortComponent';
import { getSortedArticles } from '../api'



class ArticlesByTopic extends Component {
    state = {
        articlesByTopic: []
    }
    componentDidMount(prevProps, prevState) {
        getArticlesByTopics(this.props.topic).then((res) => {
            this.setState({ articlesByTopic: res.data.articles })
        })

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
            </div>
        );
    }
    SortedArticles = (input) => {
        getSortedArticles(input).then((res) => {
            this.setState({ articlesbyTopic: res.data.articles })

        })
    }
}

export default ArticlesByTopic;