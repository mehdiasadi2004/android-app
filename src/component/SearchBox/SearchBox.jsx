/* eslint-disable no-unused-vars */
import React, { useState ,useEffect,useLocation} from "react";
import './SearchBox.css'
import { SeIthems } from "./seIthems";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';



const SearchBox = () => {


    const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    
        const fetchData = async () => {
        const res = await axios.get('https://66e3fba7d2405277ed128b1e.mockapi.io/api/brand/cars')
        setProducts(res.data)
        console.log(res.data)
        }
        


    fetchData();
    }, []);

    

    const filteredProducts = products.filter(product =>
         product.titel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );

    
        

console.log("her"+searchTerm)




    return(
        <div className="search">
            <input type="checkbox" id="searchCheck"/>
            <label className="seOpen" htmlFor="searchCheck">
                <img src="../../../public/seBlue.png" alt="" />
            </label>
            <label className="seClose" htmlFor="searchCheck">
                
            </label>
            <div className="sePro">
                    <div className="seTop">
                        <input type="text" id="search" onKeyUp={(e) => setSearchTerm(e.target.value)} />
                    </div>
                    <div className="seBottom">
                        {filteredProducts.map(product => (
                            <SeIthems key={product.id} id={product.id} image={product.image} titel={product.titel} name={product.name} />
                        ))}
                        
                        
                    </div>
                </div>
        </div>
    );
    
} 


export {SearchBox} ;




