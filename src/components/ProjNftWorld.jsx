import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NftWorld from "../assets/ProjectImages/nftworld-app.png";
import { faLink, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const ProjNftWorld = () => {
    return (
        <div>
            <section id="/NftWorld">
                <ul className="project__list">
                    <li className="project">
                        <div className="project__wrapper">
                            <div className="project__wrapper--bg"></div>
                            <img
                                src={NftWorld}
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
                                    <p>Internship Project</p>
                                    <p>NftWorld App</p>
                                </h3>
                                <h4 className="project__description--subtitle">
                                    HTML, TailwindCSS, Javascript, Vite-React,
                                    Nextjs
                                </h4>
                                <p className="project__description--para">
                                    Consumed multiple external REST APIs to map dynamic data payloads across modular frontend views. Engineered a programmatic routing architecture to resolve deep-linking for NFT creators and specific asset detail pages. Built high-performance, responsive slider carousels and integrated hardware-accelerated CSS animations to optimize user engagement. Deepened core competencies in asynchronous state synchronization and frontend micro-interactions.
                                </p>
                                <div className="project__description--links">
                                    <a
                                        href="https://manji-internship.vercel.app/"
                                        className="project__description--link"
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon icon={faLink} />
                                    </a>
                                    <a
                                        href="https://github.com/HiraniDotCom/MSH-NFT-World-App"
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

export default ProjNftWorld;
