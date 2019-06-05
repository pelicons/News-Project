import React, { Component } from 'react';
import { getArticlesByTopics } from '../api';
import { Link, Router } from "@reach/router";



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
            <div>
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
}

export default ArticlesByTopic;