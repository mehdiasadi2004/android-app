/* eslint-disable no-unused-vars */
import React from "react";
import './SearchBox.css';
import { Navigate, useNavigate } from 'react-router-dom';

const SeIthems =(id,image,name,titel)=>{
    console.log(id.id)
    const navigate = useNavigate()
    return(
        <div className="seIthems" onClick={() => 
            navigate("/detail/" + id.id)}>            
            <img src={id.image}alt="" />            
            <div>
                <span>{id.name}</span>
                <p>{id.titel}</p>
            </div>
        </div>
    );
}
export {SeIthems};
