import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import choghadiya from "../assets/ProjectImages/choghadiya-app.png";

const ProjChoghadiya = () => {
    return (
        <div>
            <section id="/choghadiya">
                <ul className="project__list">
                    <li className="project">
                        <div className="project__wrapper">
                            <div className="project__wrapper--bg"></div>
                            <img
                                src={choghadiya}
                                alt=""
                                className="project__img"
                            />
                            <div className="project__description">
                                <Link to="/projects">
                                    <FontAwesomeIcon
                                        icon={faTimes}
                                        className="modal__exit click"
                                    />
                                </Link>
                                <h3 className="project__description--title">
                                    <p>Self-Started Project</p>
                                    <p>Vedic Choghadiya App</p>
                                </h3>
                                <h4 className="project__description--subtitle">
                                    HTML, TailwindCSS, Javascript, Nextjs-App
                                    Router
                                </h4>
                                <p className="project__description--para">
                                    Inspired by family requests to calculate
                                    when is best time for good deeds, this app
                                    accepts user-entered location, imports
                                    sunrise and sunset times for the location
                                    and calculates the choghadiya timeframes and
                                    assigns the correct choghadiya to the
                                    appropriate timeframe and displays day and
                                    night time cards. An option will be
                                    activated where user can search a future
                                    date to assist future-event planning.""
                                </p>
                                <div className="project__description--links">
                                    <a
                                        href="https://msh-choghadiya.vercel.app/"
                                        className="project__description--link"
                                    >
                                        <FontAwesomeIcon icon={faLink} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default ProjChoghadiya;
