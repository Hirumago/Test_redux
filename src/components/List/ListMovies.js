import React, {Component} from "react";
import { connect } from "react-redux";
import {getMovie} from "../../js/actions";

class ListMovies extends Component{
    changeMovie(id){
        this.props.getMovie(id)
    }

    render(){
        return (
                <div>
                    {Object.keys(this.props.movies).map((keyName, i) => (
                        <div key={i}>
                            {/*<p>N° {i}</p>*/}
                            <p>{this.props.movies[keyName].Title} - {this.props.movies[keyName].Year}</p>
                            <img src={this.props.movies[keyName].Poster} alt="" onClick={() => this.changeMovie(this.props.movies[keyName].imdbID)}/>
                        </div>
                    ))}
                </div>
            )

    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMovie: id => dispatch(getMovie(id))
    };
}

const mapStateToProps = state => {
    return { movies: state.loadingMovies.movies.Search };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListMovies);

