/* eslint-disable no-unused-vars */
import React from "react";
import './Box.css'
import { Navigate, useNavigate } from 'react-router-dom';


const Box = ({fname,title,img,id,handelDelete}) => {
    const navigate = useNavigate()
    return(
        <>
        <div className="box "  >
            <div className="del" onClick={() => 
            handelDelete(id)}>
                <img src="/x.png" alt="" onClick={() => 
            navigate("/detail/" + id)}/>
                <span>Delete</span>
            </div>
            <div className="edit" onClick={() => 
            navigate("/detail/" + id)}>
                <img src="../../../public/edit.png" alt="" />
                <span>info</span>
                
            </div>
            <div className="imgH">
                <img src={img} alt="" />
            </div>
            
            <h3 onClick={() => 
            navigate("/detail/" + id)}>{fname}</h3>
            <p onClick={() => 
            navigate("/detail/" + id)}>{title}</p>
        </div>
        
        </>
    );
}
export {Box};