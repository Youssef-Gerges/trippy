import "./Destination.scss";

export default function Destination(props) {
    return (
        <div className={`first-des ${props.reverse ? 'reverse' : null}`}>
            <div className="des-text">
                <h2>{props.heading}</h2>
                <p>{props.details}</p>
            </div>
            <div className="imgs">
                <img src={props.img1} alt="des-img1" />
                <img src={props.img2} alt="des-img2" />
            </div>
        </div>
    )
}
