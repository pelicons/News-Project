import axios from 'axios';


const url = `https://mynewsapp-matthew.herokuapp.com/api`;

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
        console.log(res, "SOOOOOOOOOOORTED");
        return res
    });

}
// articles?sort_by=comment_count
//https://mynewsapp-matthew.herokuapp.com/api/articles/1/comments



export const patchVotes = (direction, id) => {
    return axios.patch(`${url}/comments/${id}`, ({ inc_votes: direction })).then((res) => {
        console.log(res);
        return res
    })
}

//          .patch('/api/articles/1')
//.send({ inc_votes: 5 })

