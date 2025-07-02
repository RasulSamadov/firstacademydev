import { color } from "framer-motion";
import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
 
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <a to="/" className="text-xl font-bold " style={{color:"#1B2070"}}>Firsts of Academy</a>
          <nav className="space-x-4">
            <a to="/" className="hover:text-blue-500">Əsas</a>
            <a to="/courses" className="hover:text-blue-500">Kurslar</a>
            <a to="/about" className="hover:text-blue-500">Haqqımızda</a>
            <a to="/contact" className="hover:text-blue-500">Əlaqə</a>
          </nav>
        </div>
      </header>
  );
}
