import Viewer from "./Viewer";
import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function ImgPrev({img: imgname}){
        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
        }

      
        const images = importAll(require.context('../assets/img/', false, /\.(png|jpe?g|svg)$/));
        console.log(images)
    

    return(
        <div className="w-screen sm:w-1/3 overflow-hidden sm:p-5 p-8 object-cover h-auto aspect-[3/4] transition ease-in-out hover:-translate-y-2.5 ">
            <Link to={"/view/"+imgname} >
                <img className="h-full w-full object-cover rounded-xl" src={images[imgname+'.jpeg']} />
            </Link>
            
            
                

        </div>  
             
       
        
        
        
/* <img src={require('./susan.jpg').default} /> */

    )
}


export default ImgPrev;
