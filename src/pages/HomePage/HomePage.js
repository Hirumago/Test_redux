import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import List from '../../components/List/List';
import Form from '../../components/Form/Form';
import Post from '../../components/Post/Post';
import Movie from "../../components/Movie/Movie";
import MovieSearch from "../../components/Movie/MovieSearch";
import ButtonsLanguages from "../../components/Button/ButtonsLanguages";
import { withTranslation } from 'react-i18next';
import Header from "../../components/Header/Header";

class HomePage extends Component {
    render(){
        return (
            <div className="HomePage">
                <Header location="HomePage"/>
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
                            <Link to='/homepage'>Homepage</Link>
                        </div>
                        <div className="card">
                            <p>{this.props.t('Choisir un langage')}</p>
                            <ButtonsLanguages/>
                        </div>
                        <div className="card">

                        </div>
                    </div>


                </section>
            </div>
        );
    }

}

export default withTranslation('app')(HomePage);
