import React, { Component } from 'react';
import axios from 'axios';
import { Link, Router } from "@reach/router";
import SingleArticle from './SingleArticle';

class ArticlesList extends Component {
    state = {
        articlesImported: []
    };



    componentDidMount() {

        const url = `https://mynewsapp-matthew.herokuapp.com/api/articles`;
        axios.get(url).then(({ data: { articles } }) => {

            this.setState({ articlesImported: articles });
        });

    }

    render() {
        return (
            <div>
                <Router>
                    <SingleArticle path="/:id" />
                </Router>


                {this.state.articlesImported.map((article) => {

                    return (

                        <div>
                            <ul key={article.article_id}>
                                <Link to={`/${article.article_id}`}>
                                    <li>{article.title}</li></Link>

                            </ul>
                        </div>
                    )
                })
                }

            </div>
        );
    }





}

export default ArticlesList;