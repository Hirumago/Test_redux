import React, {Component} from "react";
import Iframe from 'react-iframe'

class QuoteMv extends Component {
    render() {
        return (
            <div>
                <h2 className="modalTitle">Citation d'un homme désolé</h2>
                <blockquote>
                    <p>"Pardon"</p>
                    <Iframe
                        url="https://www.youtube.com/embed/2MnmEnOi27U"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        width="400px"
                        height="300px"
                    />
                    <footer>Mister MV - <cite>ZEvent 2018</cite></footer>
                </blockquote>
            </div>
        );
    }
}

export default QuoteMv;
