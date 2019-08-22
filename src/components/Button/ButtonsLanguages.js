import React, {Component} from 'react';
import {connect} from "react-redux";
import {changeLanguage} from "../../js/actions/index";
import {useTranslation} from "react-i18next";

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
        console.log(lang)
        const { i18n } = useTranslation();
        i18n.changeLanguage(lang);
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
