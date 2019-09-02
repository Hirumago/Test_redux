import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        let links = [
            {href: "/", className: "", title: "HomePage"},
            {href: "/homepage", className: "", title: "HomePage2"},
        ];
        let actualLocation = this.props.location;

        switch (actualLocation) {
            case links[0].title :
                links[0].className = "active";
                break;
            case links[1].title :
                links[1].className = "active";
                break;
            default:
                break;
        }

        return (
            <header className="HomePage-header">
                <img src="images/logo.png" alt="logo"/>
                <ul>
                    {
                        links.map((el, i) =>
                            <li className={el.className} key={i}>
                                <Link to={el.href}>{el.title}</Link>
                            </li>
                        )
                    }
                </ul>
            </header>
        );
    }
}

export default Header;
