import React, {Component} from 'react';
import './App.css';
import List from './../List/List';
import Form from './../Form/Form';
import Post from '../Post/Post';
import Movie from "../Movie/Movie";
import MovieSearch from "../MovieSearch/MovieSearch";

class App extends Component {
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
                            <Movie/>
                        </div>
                        <div className="card">
                            <MovieSearch/>
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
