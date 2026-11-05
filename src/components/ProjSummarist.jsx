import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Summarist from "../assets/ProjectImages/summarist-app.png";
import { faLink, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const ProjSummarist = () => {
    return (
        <div>
            <section id="/Summarist">
                <ul className="project__list">
                    <li className="project">
                        <div className="project__wrapper">
                            <div className="project__wrapper--bg"></div>
                            <img
                                src={Summarist}
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
                                <h3
                                    className="project__description--title"
                                    style={{ fontSize: "32px" }}
                                >
                                    <p>Internship Project</p>
                                    <p>Summarist App</p>
                                </h3>
                                <h4
                                    className="project__description--subtitle"
                                    style={{ fontSize: "20px" }}
                                >
                                    HTML, TailwindCSS, Javascript, Vite-React,
                                    Nextjs-App Router, Typescript, Firebase
                                    (Firestore/Authentication), Stripe Payments
                                    (Firebase extension)
                                </h4>
                                <p
                                    className="project__description--para"
                                    style={{ fontSize: "14px" }}
                                >
                                    Architected a secure, authenticated multi-page application, transitioning a basic layout into a robust platform with client-side protected routing. Developed an interactive dashboard featuring category carousels that dynamically handle conditional premium-content flags and deep-link to isolated detail views. Engineered a personalized library subsystem allowing users to track reading progress, alongside subscription-gated view states backed by an integrated custom audio player component. Implemented an automated transaction gateway funnel, profile configuration views, and an authenticated search query filter with responsive dropdown overlays. Optimized user experience across asynchronous data fetch cycles by building custom layout skeleton loading states.
(
                                </p>
                                <div className="project__description--links">
                                    <a
                                        href="https://manji-internship2.vercel.app/"
                                        className="project__description--link"
                                    >
                                        <FontAwesomeIcon icon={faLink} />
                                    </a>
                                    <a
                                        href="https://github.com/HiraniDotCom/MSH-SummaristApp"
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

export default ProjSummarist;
