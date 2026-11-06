import MSH from "../assets/MSH Logo.ico";
import Resume from "../assets/resume_frontend.pdf";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = ({ onOpenContact }) => {
    return (
        <div className="footer__container">
            <footer>
                <div className="row footer__row">
                    <figure className="footer__logo--wrapper">
                        <img src={MSH} className="white-logo" width={80}  />
                    </figure>
                    <div className="footer__social--list">
                        <Link
                            to="https://github.com/HiraniDotCom/MSH-Projects"
                            target="_blank"
                            className="nav__link--anchor link__hover-effect link__hover-effect--white click"
                        >
                            GitHub
                        </Link>
                        <Link
                            to="https://www.linkedin.com/in/manji-hirani-1a7941419"
                            target="_blank"
                            className="nav__link--anchor link__hover-effect link__hover-effect--white click"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            to={Resume}
                            target="_blank"
                            className="nav__link--anchor link__hover-effect link__hover-effect--white click"
                            download
                        >
                            Resume
                        </Link>
                        <button
                            className="mail__btn click"
                            type="button"
                            aria-label="Contact me"
                            onClick={(event) =>
                                onOpenContact(event.currentTarget)
                            }
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </button>
                    </div>
                    <div className="footer__copyright">
                        Copyright © 2026 Manji S Hirani
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
