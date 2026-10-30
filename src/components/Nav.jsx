import Me from "../assets/MSH-Sketch.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal() {
        setIsModalOpen((prev) => !prev);
    }

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("modal--open");
        } else {
            document.body.classList.remove("modal--open");
        }

        return () => document.body.classList.remove("modal--open");
    }, [isModalOpen]);

    return (
        <div className="nav__container">
            <nav>
                <figure>
                    <img id="personal-logo" src={Me} alt="" />
                </figure>
                <ul className="nav__link--list">
                    <li className="nav__link click">
                        <Link
                            to="/"
                            className="nav__link--anchor link__hover-effect link__hover-effect--white"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav__link click">
                        <Link
                            to="/projects"
                            className="nav__link--anchor link__hover-effect link__hover-effect--white"
                        >
                            Projects
                        </Link>
                    </li>
                    <li
                        className="nav__link click nav__link--anchor link__hover-effect link__hover-effect--white"
                        onClick={toggleModal}
                    >
                        Contact Me
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
