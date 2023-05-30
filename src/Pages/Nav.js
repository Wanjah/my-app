import React from "react";
import '../index.css'
import {NavLink ,Outlet} from "react-router-dom";
export default function Nav(){
    return(
        <>
        <ul className="mynav">
        <li className="mynav_a"><NavLink to="/home">Home</NavLink></li>
        <li className="mynav_a"><NavLink to="/gallery">Gallery</NavLink></li>
        <li className="mynav_a"><NavLink to="/table">Table</NavLink></li>
        </ul>
        <Outlet/>
        </>
    )
}