import React, { Component } from 'react';
import { connect } from "react-redux";
import {getMovie} from "../../js/actions/index";

class Movie extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMovie();
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
            let releasedDate = this.props.loadingMovie.movie.Released;
            if (this.props.loadingMovie.movie.Released !== "N/A"){
                releasedDate = new Intl.DateTimeFormat('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(this.props.loadingMovie.movie.Released))
            }
            return (
                <div className="movie">
                    <img src={this.props.loadingMovie.movie.Poster} alt="" className="poster"/>
                    <p>{this.props.loadingMovie.movie.Title}</p>
                    <p>Rated : {this.props.loadingMovie.movie.Rated}</p>
                    <p>Sortie : {releasedDate}</p>
                    <p>Durée : {this.props.loadingMovie.movie.Runtime}</p>
                    <p>Genre : {this.props.loadingMovie.movie.Genre}</p>
                    <p>Directeur : {this.props.loadingMovie.movie.Director}</p>
                    <p>Auteur : {this.props.loadingMovie.movie.Writer}</p>
                    <p>Acteurs : {this.props.loadingMovie.movie.Actors}</p>
                    <p>Synopsis (anglais) : {this.props.loadingMovie.movie.Plot}</p>
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
