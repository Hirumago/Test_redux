import {
    ADD_ARTICLE,
    CHANGE_LANGUAGE,
    DATA_LOADED,
    MOVIE_LOADING,
    SEARCH_MOVIE_LOADING,
    MINI_MOVIES_LOADING
} from "../constants/action-types";

const initialState = {
    articles: [],
    remoteArticles: [],
    loadingMovie: { loading: false, movie: null, error: null },
    loadingMovies: { loading: false, movies: null, error: null },
    loadingLanguage: { languageSettings: null },
    loadingMiniMovies: [],
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

    if (action.type === MINI_MOVIES_LOADING) {
        // state.loadingMiniMovies[action.payload.id] = action.payload.payload;
        // let originalState = state.loadingMiniMovies;
        // originalState.splice(action.payload.id, 0, action.payload.payload);
        // originalState[action.payload.id] = action.payload.payload;

        // console.log(originalState)

        // return Object.assign({}, state, {
        //     // loadingMiniMovies: state.loadingMiniMovies.slice(action.payload.id, 0, action.payload.payload)
        //     // loadingMiniMovies: state.loadingMiniMovies.concat(action.payload)
        //     // loadingMiniMovies: state.loadingMiniMovies
        //     // loadingMiniMovies: originalState[action.payload.id] = action.payload.payload
        //     // loadingMiniMovies: state.loadingMiniMovies = originalState
        //     // loadingMiniMovies: state.loadingMiniMovies = originalState
        //     // loadingMiniMovies: state.loadingMiniMovies.concat(action.payload)
        // });

        // let test = {[action.payload.id] : action.payload.payload}
        // let originalState = state.loadingMiniMovies;
        // originalState[action.payload.id] = action.payload.payload;
        //
        // return Object.assign({}, state, {
        //     // [action.payload.id] : action.payload.payload
        //     // loadingMiniMovies : state.loadingMiniMovies[action.payload.id] = action.payload.payload
        //     loadingMiniMovies : state.loadingMiniMovies.concat(action.payload)
        // });

        return {...state, loadingMiniMovies : {...state.loadingMiniMovies, [action.payload.id] : action.payload.payload}}
    }
    return state;
}

export default rootReducer;