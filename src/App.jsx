/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Detail } from './component/detail/detail'
import { Cars } from './component/Brands/Cars'
import { Header } from './component/Header/Header'
import { Footer } from './component/Footer/Footer'
import { useNavigate, useSearchParams } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams();

  console.log('searchParams', searchParams.get('key'))

  const onCreateCar = () => {
    // Create a new Car

   
    navigate('/list')
  }

  const setSearch = () => {
    setSearchParams((prev) => {
      prev.set("search", "test");
      return prev;
    });
  };
  return <h2>This is main page
    <button onClick={onCreateCar} className='border block'>Create Car</button>
    <button onClick={setSearch} className='border block'>Set Search</button>
  </h2>;
}

export default App
