/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink, useLocation,useNavigate } from "react-router-dom";

import './Header.css'
import AddCard from "../AddCard/AddCard";
import { SearchBox } from "../SearchBox/SearchBox";


const Header = ({setCars,cars}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate()
  return (
    <header className="header">

        <div className="hLeft" onClick={() => 
            navigate("/")}>
            <img src="/image/default.png" alt="" />
        </div>
        <div className="hRight">
          {/* <SearchBox cars={cars}/> */}
          


        
        </div>



        


    </header>
    
  );
};

export { Header };
