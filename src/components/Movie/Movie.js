// import React from "react";

// const Movie = ({id}) => {
//     fetch('http://www.omdbapi.com/?i='+id+'&apikey=c34e5420')
//         .then(res => res.json())
//         .then((data) => {
//             if (data.Title !== ""){
//                 return (
//                     <div>
//                         <p>{data.Title}</p>
//                     </div>
//                 )
//             }
//             else{
//                 return (
//                     <div>
//                         <p>Aucun film</p>
//                     </div>
//                 )
//             }
//         })
//         .catch(console.log);
//
//
//
//
// }
//
// export default Movie

// function Movie(id){
//     fetch('http://www.omdbapi.com/?i='+id+'&apikey=c34e5420')
//         .then(res => res.json())
//         .then((data) => {
//             if (data.Title !== ""){
//                 return (
//                     <div>
//                         <p>{data.Title}</p>
//                     </div>
//                 )
//             }
//             else{
//                 return (
//                     <div>
//                         <p>Aucun film</p>
//                     </div>
//                 )
//             }
//         })
//         .catch(console.log);
// }
//
// export default Movie
//
import React, { Component } from 'react';

class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: null,
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('http://www.omdbapi.com/?i='+this.props.id+'&apikey=c34e5420')
            .then(res => res.json())
            .then((data) => {
                this.setState({ movie : data })
                this.setState({ isLoading: false });

            })
            .catch(console.log);
    }

    render(){
        const {movie, isLoading} = this.state;

        if (isLoading){
            return <p>Loading...</p>
        }

        return (
            <p>{movie.Title}</p>
        )
    }
}

export default Movie;