/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import './Cars.css'
import { Box } from "../Box/Box";
import axios from "axios";
import { useLocation } from "react-router-dom";
import AddCard from "../AddCard/AddCard";

const Cars = () => {
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

    const handelDelete=(id)=>{
        
        
        deleteData(id)
       
        
    }
    const deleteData = async (id) => {
        const res = await axios.delete('https://66e3fba7d2405277ed128b1e.mockapi.io/api/brand/cars/'+id);
        
        alert("Car deleted successfully");
        console.log(res.data) 
        fetchData();
    }
    
    
    



    return(
        <>
        
        <dv className="carBox">
            {cars.map((item) => (
            <Box
                handelDelete={handelDelete}
                key={item.id}
                img={item.image}
                fname={item.name}
                title={item.titel}
                id={item.id}
            />
            ))}

        </dv>
        <AddCard  setCars={setCars} cars={cars} />
        </>
    );
}

export {Cars};