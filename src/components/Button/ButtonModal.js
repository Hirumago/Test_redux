import React, {Component} from "react";
import { withTranslation } from 'react-i18next';
import Modal from 'react-modal';
import QuoteMv from "../Quote/QuoteMv";
import QuoteMv2 from "../Quote/QuoteMv2";

//style modal
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
    }
};
//
Modal.setAppElement('body')


class ButtonModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        let content = null;
        if (this.props.content === "citation"){
            content = <QuoteMv/>
        }
        else if(this.props.content === "citation2"){
            content = <QuoteMv2/>
        }
        else{
            content = "";
        }

        return (
            <div>
                <button onClick={this.openModal}>{this.props.t(this.props.titleModal)}</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button onClick={this.closeModal} className="closeModal">x</button>
                    {content}
                </Modal>
            </div>
        );
    }
}

export default withTranslation('app')(ButtonModal);