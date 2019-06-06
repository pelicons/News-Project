import React, { Component } from 'react';
import axios from 'axios';
import { Link, Router } from "@reach/router";
import SingleArticle from './SingleArticle';
import SortComponent from '../components/SortComponent';
import { getSortedArticles } from '../api';

class ArticlesList extends Component {
    state = {
        articlesImported: [],
        total_count: 0,
        p: 1,


        //sort_by value is input for the get based on drop down menu?
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
                    <SingleArticle path="/:id" loginStatus={this.props.loginStatus} />
                </Router>
                <SortComponent SortedArticles={this.SortedArticles} />


                {this.state.articlesImported.map((article) => {

                    return (

                        <div key={article.article_id}>
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

    SortedArticles = (input) => {
        getSortedArticles(input).then((res) => {
            this.setState({ articlesImported: res.data.articles })

        })
    }
}

export default ArticlesList;