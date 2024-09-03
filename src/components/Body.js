import React from "react";
import { Routes, Route, Link } from "react-router-dom"

function Body({children}){

    return(
        <div className="bg-[#202b2c] min-h-full text-white font-serif m-0 p-0 min-h-screen">
           {children}            
        </div>
    )
}
export default Body;