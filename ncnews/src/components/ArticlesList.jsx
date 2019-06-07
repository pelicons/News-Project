import React, { Component } from 'react';
import axios from 'axios';
import { Link, Router } from "@reach/router";
import SingleArticle from './SingleArticle';
import SortComponent from '../components/SortComponent';
import { getSortedArticles, getTotalArticleCount, getArticles } from '../api';
import '../style/ArticlesList.css';

class ArticlesList extends Component {
    state = {
        articlesImported: [],
        totalcount: 0,  //currently functional gets set on initial articles list render
        p: 1
    };

    // const maxPages = getTotalArticleCount();

    // changePage = pageNum => {

    // }

    // changePage = direction => {

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    componentDidMount() {


        getArticles().then((res) => {
            this.setState({
                articlesImported: res.data.articles,
                totalcount: res.data.totalcount
            })

            console.log(res);
        })




    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.articlesImported === this.state.articlesImported) {
            //confused have to click twice
            // {() => { this.updateSortState }} on button?
            //have to set the state on click
            getArticles().then((res) => {
                console.log(res);
                this.setState({
                    articlesImported: res.data.articles,
                    totalcount: res.data.totalcount
                })


            })
        }




    }

    render() {


        return (
            <div>
                <Router>
                    <SingleArticle path="/:id" currentUserLogin={this.props.currentUserLogin} />
                </Router>
                <SortComponent SortedArticles={this.SortedArticles} />


                {
                    this.state.articlesImported.map((article) => {

                        return (

                            <div id='ListBack' key={article.article_id}>
                                <ul key={article.article_id}>
                                    <Link to={`/${article.article_id}`}>
                                        <li>{article.title}</li></Link>
                                    <br></br>
                                    <li>{article.votes} Votes</li>


                                </ul>
                            </div>
                        )
                    })
                }

            </div >
        );
    }

    SortedArticles = (input) => {
        getSortedArticles(input).then((res) => {
            this.setState({ articlesImported: res.data.articles })
            console.log(res.data.articles, "article list")
        })
    }
}

export default ArticlesList;