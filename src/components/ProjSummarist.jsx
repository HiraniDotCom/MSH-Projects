import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Summarist from "../assets/summarist-app.png";
import Projects from "./Projects";
import { faLink, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
    faCss3,
    faHtml5,
    faJava,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const ProjSummarist = () => {
    function contact(event) {
        // Component state for modal visibility
        const [loadingVisible, setLoadingVisible] = useState(false);
        const [successVisible, setSuccessVisible] = useState(false);

        // Handle form submission
        const handleSubmit = async (event) => {
            event.preventDefault();

            try {
                setLoadingVisible(true); // show loading overlay

                await emailjs.sendForm(
                    "service_otp7b4l",
                    "template_onlzcwr",
                    event.target,
                    "A6ds1qhmaDYSxiRr9",
                );

                setLoadingVisible(false);
                setSuccessVisible(true); // show success overlay
            } catch (error) {
                setLoadingVisible(false);
                alert(
                    "The email service is unavailable at this time. Please contact me directly: Hirani.dotcom@gmail.com",
                );
            }
        };
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal() {
        setIsModalOpen((prev) => !prev);
    }

    // Side effect: add/remove class on body when modal changes
    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("modal--open");
        } else {
            document.body.classList.remove("modal--open");
        }

        // Cleanup on unmount
        return () => document.body.classList.remove("modal--open");
    }, [isModalOpen]);

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
                                    the project was to make; 1\ Home page -
                                    create and make active headings and an
                                    authentication modal with the usual sign
                                    in/up options. 2\ An intro page with
                                    carousel slides of Selected, Recommended &
                                    Suggested books, showing which are Premium
                                    content 3\ Dynamically link each book to
                                    their dedicated detail page, with option to
                                    save to user's library page 4\ Subject to
                                    user choice of subscription plan, allow
                                    access to extra Premium content where user
                                    can read or listen to the book (installed
                                    audio player) 5\ Create a sales page where a
                                    signed in user can choose from available
                                    subscription plans and initiate a payment
                                    transaction 6\ Create a user account page
                                    showing user information and current
                                    subscription plan 7\ Authenication
                                    controlled search resulting in a dropdown
                                    list of search results 8\ Sidebar leading to
                                    the above functions, with a Logout option 9\
                                    Creating active loading skeleton states 10\
                                    A personalized Library page showing books
                                    saved & finished.
                                    <p style={{ color: "yellow" }}>
                                        *** My biggest project to date without
                                        any help from tutors, mentors, etc. Very
                                        proud and excited for the next
                                        challenge. Age is no barrier in my
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

                {/* Modal */}
                <div className="modal">
                    <div className="modal__half modal__about">
                        <h3 className="modal__title modal__title--about">
                            Here's a bit about me.
                        </h3>
                        <h4 className="modal__subtitle modal__subtitle--about">
                            Frontend Software Engineer
                        </h4>
                        <p className="modal__para">
                            I am a passionate
                            <b className="purple">
                                Frontend Software Engineer
                            </b>{" "}
                            with a strong focus on creating intuitive,
                            responsive, and visually appealing user interfaces.
                            <br />
                            <br />
                            Skilled in technologies like HTML, CSS, JavaScript,
                            and modern frameworks such as React, I enjoy
                            <b className="purple">
                                {" "}
                                transforming complex ideas
                            </b>{" "}
                            into seamless digital experiences. My approach
                            combines clean, maintainable code with a keen eye
                            for design, ensuring both functionality and
                            aesthetics.
                            <br />
                            <br />I am eager to contribute my expertise to build
                            engaging web applications that
                            <b className="purple">
                                deliver exceptional user experiences.
                            </b>
                        </p>
                        <div className="modal__languages">
                            <figure className="modal__language">
                                <FontAwesomeIcon
                                    icon={faHtml5}
                                    className="modal__language--img"
                                    alt="HTML5"
                                />
                                <span className="language__name">HTML</span>
                            </figure>
                            <figure className="modal__language">
                                <FontAwesomeIcon
                                    icon={faCss3}
                                    className="modal__language--img"
                                    alt="CSS+3"
                                />
                                <span className="language__name">CSS</span>
                            </figure>
                            <figure className="modal__language">
                                <FontAwesomeIcon
                                    icon={faJava}
                                    className="modal__language--img"
                                    alt="Javascript"
                                />
                                <span className="language__name">
                                    Javascript
                                </span>
                            </figure>
                            <figure className="modal__language">
                                <FontAwesomeIcon
                                    icon={faReact}
                                    className="fa-brands fa-react modal__language--img"
                                    alt="React"
                                />
                                <span className="language__name">React</span>
                            </figure>
                        </div>
                    </div>
                    <div className="modal__half modal__contact">
                        <Link to="/projects">
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="modal__exit click"
                            />
                        </Link>
                        <h3 className="modal__title modal__title--contact">
                            Let's have a chat . . .
                        </h3>
                        <h4 className="modal__subtitle modal__subtitle--contact">
                            I am currently open to new opportunities!
                        </h4>
                        <form id="contact__form" onSubmit={contact(event)}>
                            <div className="form__item">
                                <label className="form__item--label">
                                    Name:{" "}
                                </label>
                                <input
                                    className="input"
                                    input="user_name"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="form__item">
                                <label className="form__item--label">
                                    Email:{" "}
                                </label>
                                <input
                                    className="input"
                                    input="user_email"
                                    type="email"
                                    required
                                />
                            </div>
                            <div className="form__item">
                                <label className="form__item--label">
                                    Message:{" "}
                                </label>
                                <textarea
                                    className="input"
                                    input="message"
                                    type="text"
                                    required
                                ></textarea>
                            </div>
                            <button
                                id="contact__submit"
                                className="form__submit"
                                type="submit"
                            >
                                Send it to me
                            </button>
                        </form>
                        <div className="modal__overlay modal__overlay--loading">
                            <FontAwesomeIcon icon={faSpinner} />
                        </div>
                        <div className="modal__overlay modal__overlay--success">
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="modal__exit click"
                                onClick={toggleModal}
                            />
                            Thank you for your message! <br />
                            <br />
                            Looking forward to talking with you soon.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjSummarist;
