import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Movies from "../assets/ProjectImages/movies-app.png";
import { faLink, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProjMovies = () => {
    return (
        <div>
            <section id="/movies">
                <ul className="project__list">
                    <li className="project">
                        <div className="project__wrapper">
                            <div className="project__wrapper--bg"></div>
                            <img src={Movies} alt="" className="project__img" />
                            <div className="project__description">
                                <Link to="/projects">
                                    <FontAwesomeIcon
                                        icon={faTimes}
                                        className="modal__exit click"
                                    />
                                </Link>
                                <h3 className="project__description--title">
                                    Movies Search App
                                </h3>
                                <h4 className="project__description--subtitle">
                                    HTML, CSS, Javascript, React, Firestore
                                    Authentication
                                </h4>
                                <p className="project__description--para">
                                    Using a live link to the IMDB Movies via
                                    API, user get to research some of their
                                    favorite movies by searching a keyword, sort
                                    the results by name or year of release. By
                                    choosing one of the results, they will get
                                    detailed information about their chosen
                                    movie, such as actors, genre, plot and IMDB
                                    rating. I have applied my crash course
                                    learnings on HTML, CSS,Javascript & React to
                                    this project.
                                </p>
                                <div className="project__description--links">
                                    <a
                                        href="https://react-app-final-project-six.vercel.app/"
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

export default ProjMovies;
