import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NftWorld from "../assets/ProjectImages/nftworld-app.png";
import { faLink, faTimes } from "@fortawesome/free-solid-svg-icons";
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
                                    Nextjs-App Router
                                </h4>
                                <p className="project__description--para">
                                    Given a skeleton base code, the objective
                                    was to source data from a number of API
                                    sources, hook the data object values to
                                    their respective pages and information
                                    places. Dynamic links are programmed to
                                    connect user to NFT owners and creators. The
                                    API sourced NFTs are displayed in slider
                                    carousels, all of which individually connect
                                    to their detailed description pages. For
                                    added UI effect, the landing page includes a
                                    number of animations. Had a great time with
                                    this project, particularly learning how to
                                    manipulate UI effects.
                                </p>
                                <div className="project__description--links">
                                    <a
                                        href="https://manji-internship.vercel.app/"
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

export default ProjNftWorld;
