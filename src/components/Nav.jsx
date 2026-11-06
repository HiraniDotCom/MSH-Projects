import Me from "../assets/MSH-Sketch.jpg";
import { Link } from "react-router-dom";

const Nav = ({ onOpenContact }) => {
    return (
        <div className="nav__container">
            <nav aria-label="Main navigation">
                <figure>
                    <img id="personal-logo" src={Me} alt="" />
                </figure>
                <ul className="nav__link--list">
                    <li className="nav__link click">
                        <Link
                            to="/"
                            className="nav__link--anchor link__hover-effect link__hover-effect--white"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav__link click">
                        <Link
                            to="/projects"
                            className="nav__link--anchor link__hover-effect link__hover-effect--white"
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="nav__link click">
                        <button
                            type="button"
                            className="nav__link--anchor link__hover-effect link__hover-effect--white"
                            onClick={(event) => onOpenContact(event.currentTarget)}
                        >
                            Contact Me
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
