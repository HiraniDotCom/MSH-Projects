import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Summarist from "../assets/ProjectImages/summarist-app.png";
import { faLink, faTimes } from "@fortawesome/free-solid-svg-icons";
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
                                    Given a landing page with basic HTML & CSS,
                                    created active headings and an
                                    authentication modal with the usual sign
                                    in/up options. An intro page with carousel
                                    slides of Selected, Recommended & Suggested
                                    books, showing which are Premium content.
                                    Dynamically linked each book to their
                                    dedicated detail page, with option to save
                                    to user's library page. Subject to user
                                    choice of subscription plan, allow access to
                                    extra Premium content where user can read or
                                    listen to the book (installed audio player).
                                    Created a sales page where a signed in user
                                    can choose from available subscription plans
                                    and initiate a payment transaction. Created
                                    a user account page showing user information
                                    and current subscription plan.
                                    Authentication controlled search resulting
                                    in a dropdown list of search results.
                                    Sidebar leading to the above functions, with
                                    a Logout option. Created active loading
                                    skeleton states. A personalized Library page
                                    showing books saved & finished.
                                    <p style={{ color: "yellow" }}>
                                        *** My biggest & unsupported project to
                                        date. Very proud and excited for the
                                        next challenge. Age is no barrier in my
                                        learning world. ***
                                    </p>
                                </p>
                                <div className="project__description--links">
                                    <a
                                        href="https://manji-internship2.vercel.app/"
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

export default ProjSummarist;
