import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
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
                                    Engineered a multiphase routed application that captures user demographic inputs and facial assets via file upload or media stream screen capture. Integrated a backend API pipeline to process facial images, rendering returned demographic payloads into interactive forms for user validation and adjustment.  Faithfully translated complex UX specifications, color tokens, and structural layout systems from high-fidelity Figma designs into semantically compliant frontend code.
                                </p>
                                <div className="project__description--links">
                                    <a
                                        href="https://msh-skinstric.vercel.app/"
                                        className="project__description--link"
                                    >
                                        <FontAwesomeIcon icon={faLink} />
                                    </a>
                                    <a
                                        href="https://github.com/HiraniDotCom/msh-skinstric"
                                        className="project__description--link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faGithub} />
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
