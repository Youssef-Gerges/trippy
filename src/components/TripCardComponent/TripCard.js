import "./TripCard.scss";

export default function TripCard(props) {
    return (
        <div className="t-card">
            <div className="t-img">
                <img src={props.img} alt="t-img" />
            </div>

            <h4>{props.heading}</h4>
            <p>{props.details}</p>
        </div>
    )
}
