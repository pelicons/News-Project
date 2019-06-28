import React, { Component } from 'react';
import { Link, Router, navigate  } from "@reach/router";
import SingleArticle from './SingleArticle';
import SortComponent from '../SortComponent';
import { getSortedArticles,  getArticles, postArticle, getTopics, deleteArticle } from '../../api';
import './ArticlesList.css';
import ArticlePostForm from './ArticlePostForm';
import TopicsList from '../TopicsComponents/topicsList'
import { Error } from '../Error';

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
        .then((topics) => {
           
          this.setState({ topicsArray: topics });
        })
        getArticles().then((res) => {
            this.setState({
                articlesImported: res.data.articles,
                totalcount: res.data.totalcount
            })
           
        }).catch(({ response }) => {
            const errstatus = response.status;
            const errmessage = response.data.msg;
            const err = { errstatus, errmessage };
            this.setState({ err });

    })


    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
           
            getArticles({p: this.state.page}).then((res) => {
                console.log(res);
                this.setState({
                    articlesImported: res.data.articles,
                    totalcount: res.data.totalcount
                })
                   
                  }).catch(( response ) => {
                    const errstatus = response.status;
            const errmessage = response.data.msg;
            const err = { errstatus, errmessage };
                    this.setState({ err });
            })
        }




    }

    render() {
      const { err } = this.state;
    if (err) {
      return <Error err={err} />;
    }

        const maxPages = Math.ceil(this.state.totalcount / 10);
   
        return (
            <div class="main-column">
      
                <Router>
                <TopicsList path="/topics/*" />
                <SingleArticle path="/:id" currentUserLogin={this.props.currentUserLogin} />
                </Router>
                <SortComponent SortedArticles={this.SortedArticles} />
                <br></br>
                <button onClick={this.deleteReactArticle}>BUTTON DELETE TEST</button>
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
                                    <li>created at: {article.created_at.split('').slice(0, 10).join('')}</li>


                                </ul>
                            </div>
                        )
                    })
                }
      
          <button
            disabled={this.state.page === 1}
            onClick={() => this.changePage(-1)}
            id="left"class="previous">Previous &laquo;>
          </button>
          <button
            disabled={this.state.page === maxPages}
            onClick={() => this.changePage(1)}
            id="right" class="next">Next &raquo;>
            </button>
        
            </div >
        );
    }

    deleteReactArticle = (articleID) => {
      deleteArticle(31).then((res) => {
        console.log(res);
      })
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
        if (bool === true) newBool = false;
        if (bool === false) newBool = true; 
        this.setState({ button: newBool });
      };

         
   

      handleSubmit = postState => {
        const { titleInput, bodyInput, topicInput } = postState;
        const newArticle = {
          title: titleInput,
          body: bodyInput,
          topic: topicInput,
          author: this.props.name
        };
        postArticle(newArticle)
          .then((article) => {
          
            navigate(`/articles/${article.data.article.article_id}`);
            getArticles()
              .then((articles) => {
                this.setState({ articlesImported: articles.data.articles });
              })
            
            })
}
}

export default ArticlesList;