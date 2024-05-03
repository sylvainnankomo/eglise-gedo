import { BrowserRouter as Router , Routes, Route, Link, NavLink, Outlet, useParams } from "react-router-dom";

import React from 'react';

const Header = () => {
    return (
        <header className=" text-white py-4 px-8">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Église Gedo</h1>
                
            <nav className="flex space-x-4">
               
                <NavLink to="/">Accueil</NavLink>
                
                <NavLink to="/propos">À Propos</NavLink>
                
                <NavLink to="/services">Services</NavLink>
                
               <NavLink to="/evenements">Événements</NavLink>
    
                <NavLink to="/contact">Contact</NavLink>
             </nav>
            </div>
        </header>
    );
};

export default Header;
