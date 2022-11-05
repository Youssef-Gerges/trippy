import "./SectionHeading.scss";


export default function SectionHeading(props) {
    return (
        <div className='section-heading'>
            <h1>{props.heading}</h1>
            <p>{props.subHeading}</p>
            <div className={props.containerName}>
                {props.children}
            </div>
        </div>
    )
}
