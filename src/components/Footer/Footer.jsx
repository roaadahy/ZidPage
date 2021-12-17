import React from "react";
import footerlogoo from '../../assets/images/footerlogoo.png';
import chaticon from '../../assets/images/chaticon.png'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faLinkedinIn,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import upicon from '../../assets/images/up.png'
import NavBar from '../NavBar/NavBar'
const Footer = () => {
    return (
        <>
            <footer className="py-2" >
                <div className="d-flex flex-column align-items-center justify-content-center text-center">
                    <figure className="me-4 my-4">
                        <img
                            src={footerlogoo} alt="footer logo"></img>
                    </figure>
                   
                    <div>
                        <FontAwesomeIcon icon={faTwitter} className="ms-5 fs-5 icons" />
                        <FontAwesomeIcon icon={faInstagram} className="ms-5 fs-5 icons" />
                        <FontAwesomeIcon icon={faLinkedinIn} className="ms-5 fs-5 icons" />
                        <FontAwesomeIcon icon={faYoutube} className="fs-5 icons" />
                    </div>
                    <p>&nbsp;</p>
                </div>

                <div className="d-flex justify-content-between text-right px-5 footer-div">
                    <span className="py-2 px-2 chat ">
                        <img src={chaticon} className="fs-4 footer-img rounded-circle" />
                    </span>
                    
                        <span className="py-1 px-2 arrowUpSpan ">
                        <img src={upicon} className="fs-4 footer-img rounded-circle" onClick={() => window.scrollTo(0, 0)} />
                        </span>
                </div>
            </footer>
        </>
    );
};

export default Footer;