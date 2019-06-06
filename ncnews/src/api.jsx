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
        console.log(res, "SOOOOOOOOOOORTED");
        return res
    });
}

export const postComment = (currentAuthor, currentBody, id) => {
    

    return axios.post(`${url}/articles/${id}/comments`, { author: currentAuthor, body: currentBody })
        .then((res) => {
            console.log(res);
            return res
        })
}
// articles?sort_by=comment_count
//https://mynewsapp-matthew.herokuapp.com/api/articles/1/comments


