import React, { Component } from 'react';
import axios from 'axios';
import { Link, Router, navigate } from "@reach/router";
import SingleArticle from './SingleArticle';
import SortComponent from '../components/SortComponent';
import { getSortedArticles, getTotalArticleCount, getArticles } from '../api';
import '../style/ArticlesList.css';

class ArticlesList extends Component {
    state = {
        articlesImported: [],
        totalcount: 0,  
        page: 1,
        err: null
    };

 

    componentDidMount() {


        getArticles().then((res) => {
            this.setState({
                articlesImported: res.data.articles,
                totalcount: res.data.totalcount
            }).catch(({ response }) => {
                const errStatus = response.status;
                const errMessage = response.data.msg;
                const err = { errStatus, errMessage };
                this.setState({ err });
              });
            // navigate(`/`);

            console.log(res);
        })




    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            //confused have to click twice
            // {() => { this.updateSortState }} on button?
            //have to set the state on click
            getArticles({p: this.state.page}).then((res) => {
                console.log(res);
                this.setState({
                    articlesImported: res.data.articles,
                    totalcount: res.data.totalcount
                }).catch(({ response }) => {
                    console.log(response);
                    // const errStatus = response.status;
                    // const errMessage = response.data.msg;
                    // const err = { errStatus, errMessage };
                    // this.setState({ err });
                  });
            })
        }




    }

    render() {

        const maxPages = Math.ceil(this.state.totalcount / 10);
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
                                    <Link to={`/ ${article.article_id}`}>
                                        <li>{article.title}</li></Link>
                                    <br></br>
                                    <li>{article.votes} Votes</li>


                                </ul>
                            </div>
                        )
                    })
                }
      
          <button
            disabled={this.state.page === 1}
            onClick={() => this.changePage(-1)}
            id="left"
          >
            <i className="style" />
          </button>
          <button
            disabled={this.state.page === maxPages}
            onClick={() => this.changePage(1)}
            id="right"
          >
            <i className="style" />
          </button>
        
            </div >
        );
    }

    SortedArticles = (input) => {
        getSortedArticles(input).then((res) => {
            this.setState({ articlesImported: res.data.articles })
            console.log(res.data.articles, "article list")
        })
    }
    changePage = dir => {
        this.setState(prevState => {
          return { page: prevState.page + dir };
        });
      };
    
  
}

export default ArticlesList;