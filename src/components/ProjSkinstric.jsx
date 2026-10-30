import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import skinstric from "../assets/ProjectImages/skinstric-app.png";

const ProjSkinstric = () => {
    return (
        <div>
            <section id="/skinstric">
                <ul className="project__list">
                    <li className="project">
                        <div className="project__wrapper">
                            <div className="project__wrapper--bg"></div>
                            <img
                                src={skinstric}
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
                                    <p>Guided Internship</p>
                                    <p>Skinstric AI App</p>
                                </h3>
                                <h4 className="project__description--subtitle">
                                    HTML, TailwindCSS, Javascript, Nextjs-App
                                    Router, React-Icons, Vercel Deployment
                                </h4>
                                <p className="project__description--para">
                                    Challenged to create a routed app that
                                    collects user name, ethnic origin and
                                    invites user to either upload their facial
                                    image or allow a screen capture of their
                                    face. The captured image is uploaded to a
                                    backend API and resultant demographic data
                                    is returned and displayed for user to
                                    confirm or adjust. Not part of the
                                    internship project was using the confirmed
                                    demographics to generate a recommended
                                    facial treatment. The design format, colors
                                    and layout was provided in a Figma file and
                                    had to be adopted in the project.
                                </p>
                                <div className="project__description--links">
                                    <a
                                        href="https://msh-skinstric.vercel.app/"
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

export default ProjSkinstric;
