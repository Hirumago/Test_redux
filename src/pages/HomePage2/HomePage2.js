import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Movie from "../../components/Movie/Movie";
import { withTranslation } from 'react-i18next';
import ButtonModal from "../../components/Button/ButtonModal";

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
                    </div>
                </section>
            </div>
        );
    }

}

export default withTranslation('app') (HomePage2);
