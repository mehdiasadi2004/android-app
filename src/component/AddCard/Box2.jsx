/* eslint-disable no-unused-vars */
import React from "react";
import './AddCard.css'

const Box2 = ({namee,title ,image}) => {
    return(
        <div className="box2">
            <img src={image} alt="" />
            <h3>{namee}</h3>
            <p>{title}</p>
        </div>
    );
}
export {Box2};