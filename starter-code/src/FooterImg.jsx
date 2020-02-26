import React from 'react';

export default function FooterImg(props) {
    return <div className = "footer-content">
        <img src={props.img} alt={props.text}/>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        </div>
}