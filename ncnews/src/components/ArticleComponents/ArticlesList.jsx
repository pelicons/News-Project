import React, { Component } from 'react';
import { Link, Router, navigate  } from "@reach/router";
import SingleArticle from './SingleArticle';
import SortComponent from '../SortComponent';
import { getSortedArticles,  getArticles, postArticle, getTopics } from '../../api';
import './ArticlesList.css';
import ArticlePostForm from './ArticlePostForm';

class ArticlesList extends Component {
    state = {
        articlesImported: [],
        totalcount: 0,  
        page: 1,
        err: null,
        button: false,
        topicsArray: []
    };

 

    componentDidMount() {

        getTopics()
        .then(topics => {
           
          this.setState({ topicsArray: topics });
        })
        getArticles().then((res) => {
            this.setState({
                articlesImported: res.data.articles,
                totalcount: res.data.totalcount
            })
           
        }).catch(({ response }) => {
            const errStatus = response.status;
            const errMessage = response.data.msg;
            const err = { errStatus, errMessage };
            this.setState({ err });

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
                })
                    // const errStatus = response.status;
                    // const errMessage = response.data.msg;
                    // const err = { errStatus, errMessage };
                    // this.setState({ err });
                  }).catch(( response ) => {
                    console.log(response);
            })
        }




    }

    render() {

        const maxPages = Math.ceil(this.state.totalcount / 10);
        console.log(this.state.topicsArray)
        return (
            <div>
      
                <Router>
                    <SingleArticle path="/:id" currentUserLogin={this.props.currentUserLogin} />
                </Router>
                <SortComponent SortedArticles={this.SortedArticles} />
                <div>

        {this.props.currentUserLogin && (
          <button
            className="post-article-button"
            onClick={() => this.showArticleForm(this.state.button)}
          >
            Wrtite an Article
           
          </button>
        
        )}
         </div>   
         {this.props.currentUserLogin && this.state.button && (
          <div >
            <ArticlePostForm handleSubmit={this.handleSubmit} topicsArray={this.state.topicsArray}/>
          </div>
        )} 





                {
                    this.state.articlesImported.map((article) => {

                        return (

                            <div id='ListBack' key={article.article_id}>
                                <ul key={article.article_id}>
                                    <Link to={`/ ${article.article_id}`}>
                                        <li>{article.title}</li></Link>
                                    <br></br>
                                    <li>{article.votes} Votes</li>
                                    <li>{article.author}</li>


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
         
          </button>
          <button
            disabled={this.state.page === maxPages}
            onClick={() => this.changePage(1)}
            id="right"
          >
            
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
      showArticleForm = bool => {
        let newBool = bool;
        bool ? (newBool = false) : (newBool = true);
        this.setState({ button: newBool });
      };

      handleSubmit = postState => {
        const { titleInput, bodyInput, topicInput } = postState;
        const newArticle = {
          title: titleInput,
          body: bodyInput,
          topic: topicInput,
          author: this.props.currentUserLogin
        };
        postArticle(newArticle)
          .then((article) => {
              console.log(article, "ARTICLE LIST")
            navigate(`/articles/${article.data.article.article_id}`);
            getArticles()
              .then((articles) => {
                  console.log(articles)
                this.setState({ articlesImported: articles.data.articles });
              })
            
            })
}
}

export default ArticlesList;