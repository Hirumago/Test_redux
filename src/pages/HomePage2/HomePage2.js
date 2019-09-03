import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Movie from "../../components/Movie/Movie";
import { withTranslation } from 'react-i18next';
import ButtonModal from "../../components/Button/ButtonModal";
import Header from "../../components/Header/Header";
import MovieMini from "../../components/Movie/MovieMini";

class HomePage2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeMiniMovies: ["tt3896198", "tt4244162", "tt0030848"]
        }
        this.miniMovies = ["tt3896198", "tt4244162", "tt0030848", "tt1986180", "tt2616114"];
        this.changeMiniMovie = this.changeMiniMovie.bind(this);
    }


    changeMiniMovie(id = false, index = false){
        if(!id){
            // let iterator = Object.keys(this.state.activeMiniMovies);
            //
            // let maxKey = 0;
            // let first = iterator[0];
            //
            // let keysActiveMiniMovies = [];
            // for (var index of iterator){
            //     if (parseInt(index) > maxKey){
            //         maxKey = parseInt(index);
            //     }
            //     if (index !== first){
            //         keysActiveMiniMovies.push(index)
            //     }
            // }
            // let nextIndexActiveMiniMovies = maxKey + 1;
            //
            // while(keysActiveMiniMovies.length < 3 && keysActiveMiniMovies.indexOf(nextIndexActiveMiniMovies) < 0){
            //     if  (nextIndexActiveMiniMovies > 4){
            //         nextIndexActiveMiniMovies = 0;
            //     }
            //     else if(keysActiveMiniMovies.indexOf(nextIndexActiveMiniMovies) === -1){
            //         keysActiveMiniMovies.push(nextIndexActiveMiniMovies)
            //     }
            //     else{
            //         nextIndexActiveMiniMovies++;
            //     }
            // }
            //
            //
            // let tempActiveMiniMovies = {
            //
            // };
            //
            // keysActiveMiniMovies.map((el) => {
            //     tempActiveMiniMovies[el] = this.miniMovies[el];
            // });

            let tempActiveMiniMovies = this.miniMovies.sort(() => .5 - Math.random()).slice(0, 3)

            this.setState({
                activeMiniMovies: tempActiveMiniMovies
            })

            this.forceUpdate()
        }
        else{
            let temp = [];
            this.miniMovies.map((value) => {
                if (this.state.activeMiniMovies.indexOf(value) === -1){
                    temp.push(value)
                }
                return false;
            });

            let tempMiniMovie = temp.sort(() => .5 - Math.random()).slice(0, 1);

            let copyActiveMiniMovies = this.state.activeMiniMovies;
            copyActiveMiniMovies[index] = tempMiniMovie[0];

            this.setState({
                activeMiniMovies: copyActiveMiniMovies
            });

            this.forceUpdate()
        }
    }

    render(){
        return (
            <div className="HomePage2">
                <Header location="HomePage2"/>
                <section>
                    <h1>Test redux page 2</h1>
                    <div className="big-deck">
                        <div className="card">
                            <Movie/>
                        </div>
                        <div className="card">
                            <Link to='/'>Index</Link>
                            <p>{this.props.t("Un test pour la détection de language")}</p>
                        </div>
                    </div>
                    <div className="deck">
                        <div className="card">
                            <ButtonModal content="citation" titleModal="Ouvrir une modale d'un homme fatigué"/>
                            <ButtonModal content="citation2" titleModal="Ouvrir une modale d'un homme désolé"/>
                        </div>
                        <div className="card">

                        </div>
                        <div className="card">

                        </div>
                    </div>
                    <div className="mini-deck">

                        {Object.keys(this.state.activeMiniMovies).map((keyName, i) => (
                            <div className="card" key={i}>
                                <MovieMini id={this.state.activeMiniMovies[keyName]}/>
                                <p>{this.state.activeMiniMovies[keyName]}</p>
                                <button onClick={() => this.changeMiniMovie(keyName, i)}>Changer un mini movie par un autre</button>
                            </div>
                        ))}

                        <div className="card">
                            <button onClick={() => this.changeMiniMovie()}>Changer les mini-movies par d'autres</button>
                        </div>
                        <div className="card">

                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

export default withTranslation('app') (HomePage2);
