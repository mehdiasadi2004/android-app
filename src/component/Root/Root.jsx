/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import './Root.css'
import { Cars } from '../Brands/Cars';
import { Detail } from '../detail/detail';
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Error } from "../Error/Error";


const Root = () => {
  const [cars, setCars] = useState([]);
    const location = useLocation()

    console.log('location',location)

    const fetchData = async () => {
    const res = await axios.get('https://66e3fba7d2405277ed128b1e.mockapi.io/api/brand/cars')
    setCars(res.data)
    console.log(res.data)
    }

    useEffect(() => {
    fetchData()
    }, [])


  return (
    <div className="main">
      <Header cars={cars} setCars={setCars}/>
      <main className="main" >
        <Outlet/>
        {/* <Error/> */}
        {/* <Cars />
        <Detail/> */}
      </main>
        <Footer /> 
    </div>
  );
}

export {Root}