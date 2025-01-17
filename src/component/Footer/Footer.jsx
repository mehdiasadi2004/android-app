/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import { MiniFooter } from './minifooter/MiniFooter';

const Footer = () => {
  return (
    <footer className="footer">
        <MiniFooter></MiniFooter>
        <MiniFooter></MiniFooter>
        <MiniFooter></MiniFooter>
        <MiniFooter></MiniFooter>
    </footer>
  );
}

export  {Footer}