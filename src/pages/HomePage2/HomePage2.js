import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Movie from "../../components/Movie/Movie";

class HomePage2 extends Component {
    render(){
        return (
            <div className="HomePage2">
                <header className="HomePage2-header">
                    <img src="images/logo.png" alt="logo"/>
                </header>
                <section>
                    <h1>Test redux page 2</h1>
                    <div className="big-deck">
                        <div className="card">
                            <Movie/>
                        </div>
                        <div className="card">
                            <Link to='/'>Index</Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

export default HomePage2;
