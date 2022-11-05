import React from 'react';
import './Hero.scss';

import { Link } from 'react-router-dom';

export default function Hero(props) {
    const title = props.title != null ? <h1>{props.title}</h1> : null;
    const text = props.text != null ? <p>{props.text}</p> : null;
    const ctf = props.btnText != null ? (<Link to={props.url} className={props.btnClass}>
        {props.btnText}
    </Link>) : null;


    return (
        <div className={`hero-section ${props.cName}`}>
            <img alt='Hero Image' src={props.image} />

            <div className="hero-text">
                {title}
                {text}
                {ctf}
            </div>
        </div>
    )
}
