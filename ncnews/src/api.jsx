import axios from 'axios';
import react from 'react';

const url = `https://mynewsapp-matthew.herokuapp.com/api`;

export const getUser = (input) => {
    return axios.get(`${url}/users/${input}`).then(({ data: {user} }) => {

        return user
    })

}





