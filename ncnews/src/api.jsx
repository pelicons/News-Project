import axios from 'axios';
import react from 'react';

const url = `https://mynewsapp-matthew.herokuapp.com/api`;

export const getUser = (input) => {
    return axios.get(`${url}/users/${input}`).then(({ data: { user } }) => {

        return user
    })

}

export const getTopics = (input) => {
    return axios.get(`${url}/topics`).then((res) => {
        return res;
    })

}

export const getArticle = (input) => {

    return axios.get(`${url}` + "/articles/" + `${input}`).then((res) => {
        return res
    });
}

export const getComments = (input) => {
console.log("hello")
    return axios.get(`${url}` + "/articles/" + `${input}` + "comments").then((res) => {
       console.log(res);
        return res
    });
}




