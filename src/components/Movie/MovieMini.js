import React, { Component } from 'react';
import { connect } from "react-redux";
import {getMiniMovie} from "../../js/actions/index";

class MovieMini extends Component {
    componentDidMount() {
        if (this.props.loadingMiniMovies[this.props.id] === undefined){
            this.props.getMiniMovie(this.props.id);
        }
    }

    componentDidUpdate(){
        if (this.props.loadingMiniMovies[this.props.id] === undefined){
            this.props.getMiniMovie(this.props.id);
        }
    }

    render(){
        if (this.props.loadingMiniMovies[this.props.id] === undefined){
            return (
                <div className="movie">
                    <img src="images/spinner.gif" alt="" className="spinner"/>
                </div>
            )
        }
        else{
            if(this.props.loadingMiniMovies[this.props.id].loading){
                return (
                    <div className="movie">
                        <img src="images/spinner.gif" alt="" className="spinner"/>
                    </div>
                )
            }
            else if (this.props.loadingMiniMovies[this.props.id].movie !== null){
                return (
                    <div className="movie">
                        <p>{this.props.loadingMiniMovies[this.props.id].movie.Title}</p>
                        <p>Synopsis (anglais) : {this.props.loadingMiniMovies[this.props.id].movie.Plot}</p>
                    </div>
                )
            }

            else if (this.props.loadingMiniMovies[this.props.id].error !== null){
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
}

function mapStateToProps(state) {
    return {
        loadingMiniMovies: state.loadingMiniMovies,
    };
}

export default connect(
    mapStateToProps,
    { getMiniMovie }
)(MovieMini);
