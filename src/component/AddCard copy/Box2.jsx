/* eslint-disable no-unused-vars */
import React from "react";
import './EditCard.css'

const Box2 = ({namee,title,desc,info,image}) => {
    return(
        <div className="box2">
            <img src={image} alt="" />
            <h3>{namee}</h3>
            <p>{title}</p>
        </div>
    );
}
export {Box2};