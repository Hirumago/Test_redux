import { ADD_ARTICLE, DATA_LOADED, MOVIE_LOADING, SEARCH_MOVIE_LOADING } from "../constants/action-types";

const initialState = {
    articles: [],
    remoteArticles: [],
    loadingMovie: { loading: false, movie: null, error: null },
    loadingMovies: { loading: false, movies: null, error: null },
};


function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }

    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
        });
    }

    if (action.type === MOVIE_LOADING) {
        return Object.assign({}, state, {
            loadingMovie: state.loadingMovie = action.payload
        });
    }
    if (action.type === SEARCH_MOVIE_LOADING) {
        return Object.assign({}, state, {
            loadingMovies: state.loadingMovies = action.payload
        });
    }

    return state;
}

export default rootReducer;