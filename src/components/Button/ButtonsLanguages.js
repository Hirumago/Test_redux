import React, {Component} from 'react';
import {connect} from "react-redux";
import {changeLanguage} from "../../js/actions/index";
import i18n from '../../translation/i18n';

class ButtonsLanguages extends Component {
    componentDidMount() {
        if (this.props.loadingLanguage.languageSettings === null) {
            this.props.changeLanguage();
        }
    }

    changeLanguage = async (lang) =>{
        i18n.changeLanguage(lang.short);
        this.props.changeLanguage(lang)
    }

    render() {
        if (this.props.loadingLanguage.languageSettings !== null){
            let availableLanguages = [
                {short: 'fr', long: 'Français', acronym:'fr_FR'},
                {short: 'en', long: 'English', acronym:'en_EN'},
                {short: 'es', long: 'Spanish', acronym:'es_ES'},
            ]

            let indexLanguagesApplication = null;
            switch (this.props.loadingLanguage.languageSettings.short){
                case availableLanguages[0].short :
                    indexLanguagesApplication = 0;
                    break;
                case availableLanguages[1].short :
                    indexLanguagesApplication = 1;
                    break;
                case availableLanguages[2].short :
                    indexLanguagesApplication = 2;
                    break;
                default:
                    indexLanguagesApplication = null;
            }

            availableLanguages.splice(indexLanguagesApplication, 1);

            return (
                <div>
                    {
                        availableLanguages.map((el, index) => (
                            <button key={index} onClick={() => this.changeLanguage(el)}>{el.long}</button>
                        ))
                    }
                </div>

            )
        }
        else{
            return (
                <div>
                    <img src="images/spinner.gif" alt="" className="spinner"/>
                </div>
            )
        }

    }
}


function mapStateToProps(state) {
    return {
        loadingLanguage: state.loadingLanguage,
    };
}

export default connect(
    mapStateToProps,
    {changeLanguage}
)(ButtonsLanguages);
