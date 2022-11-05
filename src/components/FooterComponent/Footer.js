import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faBehanceSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import "./Footer.scss";

export default function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <div className="left">
                    <h1>Trippy</h1>
                    <p>Choose Your Favourite Destination</p>
                </div>
                <div className="right">
                    <a href="/">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon icon={faInstagramSquare} />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon icon={faBehanceSquare} />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div className="col">
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div className="col">
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div className="col">
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Trouble shooting</a>
                    <a href="/">Contact Us</a>
                </div>
            </div>
        </div>
    )
}
