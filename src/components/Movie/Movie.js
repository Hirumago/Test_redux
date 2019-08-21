import React, { Component } from 'react';
import { connect } from "react-redux";
import {getMovie} from "../../js/actions/index";

// const API = 'http://www.omdbapi.com/?';
// const API_KEY = '&apikey=c34e5420';
// const DEFAULT_QUERY = 'i=';

class Movie extends Component {
    constructor(props) {
        super(props);
        //
        // this.state = {
        //     movie: null,
        //     isLoading: false,
        //     error: null,
        // };
    }

    componentDidMount() {
        this.props.getMovie(this.props.id);
    }

    render(){
        if(this.props.loadingMovie.loading){
            return (
                <div className="movie">
                    <img src="images/spinner.gif" alt="" className="spinner"/>
                </div>
            )
        }
        else if (this.props.loadingMovie.movie !== null){
            return (
                <div className="movie">
                    <img src={this.props.loadingMovie.movie.Poster} alt="" className="poster"/>
                    <p>{this.props.loadingMovie.movie.Title}</p>
                </div>
            )
        }

        else if (this.props.loadingMovie.error !== null){
            return (
                <div className="movie">
                    <p>Erreur de chargement...</p>
                </div>
            )
        }
        else{
            return (
                <p>test</p>
            )
        }




    }
}

function mapStateToProps(state) {
    return {
        loadingMovie: state.loadingMovie,
    };
}

export default connect(
    mapStateToProps,
    { getMovie }
)(Movie);