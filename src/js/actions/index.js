import {ADD_ARTICLE} from "../constants/action-types";

export function addArticle(payload) {
    return {type: ADD_ARTICLE, payload}
};

export function getData() {
    return function (dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch({type: "DATA_LOADED", payload: json});
            });
    };
}





//movie

const API = 'http://www.omdbapi.com/?';
const API_KEY = '&apikey=c34e5420';
const SEARCH_QUERY = 's=';
const DEFAULT_QUERY = 'i=';

export function searchMovie(title){

    return function (dispatch) {
        dispatch({type: "SEARCH_MOVIE_LOADING", payload: { loading: true, movies: null, error: null }});

        return fetch(API + SEARCH_QUERY + title + API_KEY + "&type=movie")
            .then(response => response.json())
            .then(json => {
                dispatch({type: "SEARCH_MOVIE_LOADING", payload: { loading: false, movies: json, error: null }});
            })
            .catch(error => {
                dispatch({type: "SEARCH_MOVIE_LOADING", payload: { loading: false, movies: null, error: error }});
            });
    };
}


export function getMovie(id) {
    return function (dispatch) {
        dispatch({type: "MOVIE_LOADING", payload: { loading: true, movie: null, error: null }});

        return fetch(API + DEFAULT_QUERY + id + API_KEY)
            .then(response => response.json())
            .then(json => {
                dispatch({type: "MOVIE_LOADING", payload: { loading: false, movie: json, error: null }});
            })
            .catch(error => {
                dispatch({type: "MOVIE_LOADING", payload: { loading: false, movie: null, error: error }});
            });
    };
}