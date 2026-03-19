import React from "react";
import Author from "../Author";

const Poster = (props) => {
    return (
        <div className="movie-card">
            <img src={props.img} alt={props.name}/>
            <div className="movie-card-body">
                <h2>{props.name}</h2>
                {typeof props.description === 'string' && (
                    <h3>{props.description}</h3>
                )}
                <Author name={props.author.name}/>
            </div>
        </div>
    )
}

export default Poster