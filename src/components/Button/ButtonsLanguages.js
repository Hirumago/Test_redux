import React, {Component} from 'react';
import {connect} from "react-redux";
import {changeLanguage} from "../../js/actions/index";
import i18n from '../../translation/i18n';

class ButtonsLanguages extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.loadingLanguage.language === null) {
            this.props.changeLanguage();
        }
    }

    changeLanguage = async (lang) =>{
        i18n.changeLanguage(lang);
        this.props.changeLanguage(lang)
    }

    render() {
        let availableLanguages = ['fr', 'en', 'es'];
        let indexLanguagesApplication = availableLanguages.indexOf(this.props.loadingLanguage.language);
        availableLanguages.splice(indexLanguagesApplication, 1);

        return (
            <div>
                {
                    availableLanguages.map((el, index) => (
                        <button key={index} onClick={() => this.changeLanguage(el)}>{el}</button>
                    ))
                }
            </div>

        )
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
