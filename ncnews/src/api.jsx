import axios from 'axios';


const url = `https://mynewsapp-matthew.herokuapp.com/api`;

export const getArticles = params => {
    return axios.get(`${url}/articles`, { params })
      .then((articles) => {
        return articles;
      });
  };

export const getUser = (specificUser) => {
    return axios.get(`${url}/users/${specificUser}`).then(({ data: { user } }) => {

        return user
    })

}

export const getTopics = (input) => {
    return axios.get(`${url}/topics`).then((res) => {
        return res;
    })

}

export const getArticle = (id) => {

    return axios.get(`${url}/articles/${id}`).then((res) => {
        return res
    });
}

export const getComments = (id) => {


    return axios.get(`${url}/articles/${id.id}/comments`).then((res) => {

        return res
    });
}

export const getArticlesByTopics = (input) => {

    return axios.get(`${url}/articles?topic=${input}`).then((res) => {

        return res
    });
}

export const getSortedArticles = (sortedQuery) => {

    return axios.get(`${url}/articles?sort_by=${sortedQuery}`).then((res) => {

        return res
    });
}

export const postComment = (currentAuthor, currentBody, id) => {


    return axios.post(`${url}/articles/${id}/comments`, { author: currentAuthor, body: currentBody })
        .then((res) => {

            return res
        })
}

export const getTotalArticleCount = () => {

    return axios.get('$url/articles').then((res) => {

        return res
    })
}


export const deleteComment = (commentid) => {
    return axios.delete(`${url}/comments/${commentid}`).then((res) => {

        return res
    })
}

export const getSortedTopicsByArticle = (topic, query) => {

    return axios.get(`${url}/articles?topic=${topic}&sort_by=${query}`).then((res) => {

        return res
    });

}




export const patchVotes = (direction, id) => {
    return axios.patch(`${url}/articles/${id}`, ({ inc_votes: direction })).then((res) => {


        return res
    })
}

export const patchCommentVotes = (direction, commentid) => {
    return axios.patch(`${url}/comments/${commentid}`, ({ inc_votes: direction })).then((res) => {


        return res
    })
}

export const getUserByUsername = username => {
    return axios
      .get(`${url}/users/${username}`)
      .then(({ data: { user } }) => {
        return user;
      });
  };

  export const postUser = newUser => {
    return axios.post(`${url}/users`, newUser).then((user) => {
      return user;
    });
  };

  export const postArticle = newArticle => {
    return axios
      .post(`${url}/articles`, newArticle)
      .then((article) => {
        return article;
      });
  };

  
export const postNewTopic = newTopic => {
    console.log(newTopic);
    return axios
      .post(`${url}/topics`, newTopic)
    
      .then((newTopic) => {
          console.log(newTopic)
          console.log(newTopic)
          console.log(newTopic)
        return newTopic;
      });
  };

  export const getArticlesByUser = username => {
    return axios
      .get(`${url}/articles?author=${username}`)
      .then((data) => {
          
        return data;
      });
  };


