import React, {Component} from "react";
import {searchMovie} from "../../js/actions/index";
import {connect} from "react-redux";
import ListMovies from "../ListMovies/ListMovies";

class MovieSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieTitle: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {movieTitle} = this.state;
        if (movieTitle !== ""){
            this.setState({movieTitle: movieTitle});
            this.props.searchMovie(movieTitle);
        }

    }


    render() {
        const {movieTitle} = this.state;
        let listMovies;
        if (this.props.loadingMovies.movies !== null){
            listMovies = <ListMovies/>
        }


        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="movieTitle">Titre film</label>
                        <input
                            type="text"
                            id="movieTitle"
                            value={movieTitle}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit">
                        Chercher
                    </button>
                </form>
                <div>
                    {listMovies}
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchMovie: title => dispatch(searchMovie(title))
    };
}


function mapStateToProps(state) {
    return {
        loadingMovies: state.loadingMovies,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieSearch);
