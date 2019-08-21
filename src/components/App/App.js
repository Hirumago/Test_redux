import React, {Component} from 'react';
import './App.css';
import List from './../List/List';
import Form from './../Form/Form';
import Post from '../Post/Post';
import Movie from "../Movie/Movie";

class App extends Component {
    state = {
        movieId: "tt3896198"
    };

    // componentDidMount() {
    //     fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c34e5420')
    //         .then(res => res.json())
    //         .then((data) => {
    //             this.setState({ movie: data })
    //         })
    //         .catch(console.log)
    // }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src="images/logo.png" alt="logo"/>
                </header>
                <section>
                    <h1>Test redux</h1>
                    <div className="deck">
                        <div className="card">
                            <h2>Articles</h2>
                            <List />
                        </div>
                        <div className="card">
                            <h2>API posts</h2>
                            <Post />
                        </div>
                        <div className="card">
                            <h2>Add a new article</h2>
                            <Form />
                        </div>
                    </div>

                    <div className="big-deck">
                        <div className="card">
                            <Movie id={this.state.movieId} />
                        </div>
                        <div className="card">

                        </div>
                    </div>

                    <div className="deck">
                        <div className="card">

                        </div>
                        <div className="card">

                        </div>
                        <div className="card">

                        </div>
                    </div>


                </section>
            </div>
        );
    }

}

export default App;
