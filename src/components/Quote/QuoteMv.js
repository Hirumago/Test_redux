import React, {Component} from "react";

class QuoteMv extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 className="modalTitle">Citation d'un homme fatigué</h2>
                <blockquote>
                    <p>"Moi vous savez ce que j'ai envie ?? Moi je veux faire l'amour !!!"</p>
                    <footer>Mister MV - <cite>ZEvent 2018</cite></footer>
                </blockquote>
            </div>
        );
    }
}

export default QuoteMv;
