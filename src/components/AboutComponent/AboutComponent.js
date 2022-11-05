import "./About.scss";

export default function AboutComponent(props) {
    return (
        <div className="about-container">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    )
}
