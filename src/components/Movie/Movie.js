import React, { Component } from 'react';

const API = 'http://www.omdbapi.com/?';
const API_KEY = '&apikey=c34e5420';
const DEFAULT_QUERY = 'i=';

class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: null,
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        if (this.state.movie === null){
            this.setState({ isLoading: true });
            fetch(API + DEFAULT_QUERY + this.props.id + API_KEY)
                .then(res => {
                    if (res.ok){
                        return res.json()
                    }
                    else{
                        throw new Error('Erreur');
                    }
                })
                .then((data) => {
                    this.setState({ movie: data })
                    this.setState({ isLoading: false });

                })
                .catch(error => this.setState({error, isLoading: false}));
        }

    }

    render(){
        const {movie, isLoading, error} = this.state;

        if (error){
            return <p>{error.message}</p>
        }

        if (isLoading){
            return <p>Loading...</p>
        }

        if (movie !== null){
            console.log(movie)
            return (
                <div className="movie">
                    <img src={movie.Poster} alt="" className="poster"/>
                    <p>{movie.Title}</p>
                </div>
            )
        }
        else{
            return (
                <p>Missing</p>
            )
        }


    }
}

export default Movie;