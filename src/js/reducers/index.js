import {
    ADD_ARTICLE,
    CHANGE_LANGUAGE,
    DATA_LOADED,
    MOVIE_LOADING,
    SEARCH_MOVIE_LOADING,
} from "../constants/action-types";

const initialState = {
    articles: [],
    remoteArticles: [],
    loadingMovie: { loading: false, movie: null, error: null },
    loadingMovies: { loading: false, movies: null, error: null },
    loadingLanguage: { languageSettings: null },
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

    if (action.type === CHANGE_LANGUAGE) {
        return Object.assign({}, state, {
            loadingLanguage: state.loadingLanguage = action.payload
        });
    }

    return state;
}

export default rootReducer;