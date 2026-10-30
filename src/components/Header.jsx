import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faHtml5,
    faCss3,
    faJs,
    faReact,
    faTailwindCss,
    faTypescript,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import {
    faTimes,
    faSpinner,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Circle from "../assets/circle.svg";
import SemiCircle from "../assets/semi circle.svg";
import Squiggly from "../assets/squiggly.svg";
import Triangle from "../assets/triangle.svg";
import Resume from "../assets/MSHJnrFEDResume.pdf";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Header = () => {
    // Component state for modal visibility
    const [loadingVisible, setLoadingVisible] = useState(false);
    const [successVisible, setSuccessVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Handler for mouse movement
    function moveBackground(event) {
        const shapes = document.querySelectorAll(".shape");

        const x = event.clientX * 0.06;
        const y = event.clientY * 0.05;

        for (let i = 0; i < shapes.length; ++i) {
            const isOdd = i % 2 !== 0;
            const boolInt = isOdd ? -1 : 1;
            shapes[i].style.transform =
                `translate(${x * boolInt}px, ${y * boolInt}px)`;
        }
    }

    useEffect(() => {
        window.addEventListener("mousemove", moveBackground);

        return () => {
            window.removeEventListener("mousemove", moveBackground);
        };
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setLoadingVisible(true);

            await emailjs.sendForm(
                "service_otp7b4l",
                "template_onlzcwr",
                event.target,
                "A6ds1qhmaDYSxiRr9",
            );

            setName("");
            setEmail("");
            setMessage("");

            setLoadingVisible(false);
            setSuccessVisible(true);
        } catch (error) {
            console.error(error);
            setLoadingVisible(false);
            alert("The email service is unavailable...");
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("modal--open");
        } else {
            document.body.classList.remove("modal--open");
        }

        return () => document.body.classList.remove("modal--open");
    }, [isModalOpen]);

    const toggleModal = () => setIsModalOpen((prev) => !prev);

    return (
        <div>
            <section id="landing" onMouseMove={moveBackground(event)}>
                <header className="header">
                    <div className="header__content">
                        <h1 className="title">Hello</h1>
                        <h1 className="title purple">I'm Manji.</h1>
                        <p className="header__para">
                            I'm a{" "}
                            <b className="purple">Frontend Software Engineer</b>{" "}
                            with a strong passion for experiences.
                            <br />
                            Here's a bit more{" "}
                            <b className="purple">about me.</b>
                        </p>
                        <div className="social__list">
                            <Link
                                to="https://www.linkedin.com/in/manji-hirani-1a7941419"
                                target="_blank"
                                className="social__link click"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </Link>
                            <Link
                                to="https://github.com/HiraniDotCom/MSH-Projects"
                                target="_blank"
                                className="social__link click"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                            <Link
                                to={Resume}
                                target="_blank"
                                className="social__link no__cursor"
                            >
                                <FontAwesomeIcon icon={faFilePdf} />
                            </Link>
                            <button
                                onClick={toggleModal}
                                className="social__link no__cursor"
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Modal */}
                <div className="modal">
                    <div className="modal__half modal__about">
                        <h3 className="modal__title modal__title--about">
                            Here's a bit about me.
                        </h3>
                        <p className="modal__para">
                            I am a passionate{" "}
                            <strong className="purple">
                                {" "}
                                Frontend Software Engineer
                            </strong>{" "}
                            bridging the gap between complex software
                            architecture & real-world business outcomes. With a
                            20-year background scaling a franchised enterprise
                            to 6 locations & managing 35+ employees producing
                            $2M+ in annual revenue, I bring an executive-level
                            understanding of user workflows, product strategy,
                            and operational metrics to modern engineering
                            teams.{" "}
                        </p>
                        <p className="modal__para">
                            I am open to{" "}
                            <strong className="purple">
                                Frontend Engineering roles
                            </strong>{" "}
                            where I can contribute enterprise-grade UI
                            components while leveraging a deep understanding of
                            business scalability.{" "}
                            <strong className="purple">Let’s connect!</strong>
                        </p>
                        <div className="modal__languages">
                            <figure className="modal__language">
                                <FontAwesomeIcon
                                    icon={faHtml5}
                                    className="modal__language--img icon__color--red"
                                    alt="HTML5"
                                />
                                <span className="language__name">HTML</span>
                            </figure>
                            <figure className="modal__language">
                                <FontAwesomeIcon
                                    icon={faCss3}
                                    className="modal__language--img icon__color--blue"
                                    alt="CSS+3"
                                />
                                <span className="language__name">CSS</span>
                            </figure>
                            <figure className="modal__language">
                                <FontAwesomeIcon
                                    icon={faJs}
                                    className="modal__language--img icon__color--yellow"
                                    alt="Javascript"
                                />
                                <span className="language__name">
                                    Javascript
                                </span>
                            </figure>
                            <figure className="modal__language">
                                <FontAwesomeIcon
                                    icon={faTailwindCss}
                                    className="modal__language--img icon__color--teal"
                                    alt="Javascript"
                                />
                                <span className="language__name">
                                    TailwindCSS
                                </span>
                            </figure>
                            <figure className="modal__language">
                                <FontAwesomeIcon
                                    icon={faTypescript}
                                    className="modal__language--img icon__color--ts"
                                    alt="Javascript"
                                />
                                <span className="language__name">
                                    Typescript
                                </span>
                            </figure>
                            <figure className="modal__language">
                                <FontAwesomeIcon
                                    icon={faReact}
                                    className="modal__language--img icon__color--teal"
                                    alt="React"
                                />
                                <span className="language__name">React</span>
                            </figure>
                        </div>
                    </div>
                    <div className="modal__half modal__contact">
                        <Link to="/">
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="modal__exit click"
                                onClick={toggleModal}
                            />
                        </Link>
                        <h3 className="modal__title modal__title--contact">
                            Let's have a chat . . .
                        </h3>
                        <h4 className="modal__subtitle modal__subtitle--contact">
                            I am currently open to new opportunities!
                        </h4>

                        <form id="contact__form" onSubmit={handleSubmit}>
                            <div className="form__item">
                                <label className="form__item--label">
                                    Name:{" "}
                                </label>
                                <input
                                    className="input"
                                    name="user_name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
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
                                    name="user_email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
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

                        {loadingVisible && (
                            <div className="modal__overlay modal__overlay--loading">
                                <FontAwesomeIcon
                                    icon={faSpinner}
                                    className="fa-spin"
                                />
                            </div>
                        )}

                        {successVisible && (
                            <div className="modal__overlay modal__overlay--success">
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className="modal__exit click"
                                    onClick={() => setSuccessVisible(false)}
                                />
                                Thank you for your message! <br /> <br />
                                Looking forward to talking with you soon.
                            </div>
                        )}
                    </div>
                </div>

                {/* Floating Shapes */}
                <img src={Circle} className="shape shape--0" alt="shape" />
                <img src={SemiCircle} className="shape shape--1" alt="shape" />
                <img src={Squiggly} className="shape shape--2" alt="shape" />
                <img src={Circle} className="shape shape--3" alt="shape" />
                <img src={Triangle} className="shape shape--4" alt="shape" />
                <img src={Circle} className="shape shape--5" alt="shape" />
                <img src={Squiggly} className="shape shape--6" alt="shape" />
                <img src={Circle} className="shape shape--7" alt="shape" />
                <img src={SemiCircle} className="shape shape--8" alt="shape" />
            </section>
        </div>
    );
};

export default Header;
