import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

export function getData() {
    return function(dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "DATA_LOADED", payload: json });
            });
    };
}


const API = 'http://www.omdbapi.com/?';
const API_KEY = '&apikey=c34e5420';
const DEFAULT_QUERY = 'i=';

export function getMovie(id) {
    return function(dispatch) {
        return fetch(API + DEFAULT_QUERY + id + API_KEY)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "MOVIE_LOADED", payload: json });
            });
    };
}