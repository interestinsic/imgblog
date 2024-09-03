import React from "react";
import {Route, Link, Routes, useParams} from 'react-router-dom';
import ImgPrev from "./ImgPrev";
import list from '../assets/json/list.json';

function Viewer(){
        const {imgId} = useParams();


        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
        }
        const images = importAll(require.context('../assets/img/', false, /\.(png|jpe?g|svg)$/));
        // console.log(images)
       
        const idnum = parseInt(imgId.substring(0, 2));
        console.log(idnum)
        

        const title = imgId.substring(2)
        // console.log(title)

        const ptxt = list[idnum]
        // console.log(ptxt)

    return(
        <div className="mx-auto">
            <div className="h-40 bg-gradient-to-r from-[#008085] to-[#003a58] max-w-xl mx-auto md:rounded-xl p-8 mb-3">
                <h1 className="text-3xl text-center">{title}</h1>
                <p className="object-contain ">{ptxt}</p>
             </div>
            <img className="w-screen md:w-auto mx-auto max-h-screen" src={images[imgId+'.jpeg']} />
        </div>
        )
    
}

export default Viewer;