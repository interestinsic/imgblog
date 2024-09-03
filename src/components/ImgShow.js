import ImgPrev from "./ImgPrev";
import Viewer from "./Viewer";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function ImgShow(){

    
   
      

    return(
        <div class="flex flex-wrap overflow-hidden sm:w-5/6 w-screen mx-auto">

            <ImgPrev img="12ProtectiveTrees"/>            
            <ImgPrev img="11LittlePalace"/>
            <ImgPrev img="10ImportantWall"/>            
            <ImgPrev img="09PhotogenicDuck"/>
            <ImgPrev img="08RectangularView"/>
            <ImgPrev img="07FlybyMountain"/>
            <ImgPrev img="06BlockyCity"/>
            <ImgPrev img="05MysticMountains"/>    
            <ImgPrev img="04DoubleRainbow"/>
            <ImgPrev img="03HiddenFlower"/>
            <ImgPrev img="02ReflectiveSunset"/>
            <ImgPrev img="01MysticNoon"/>
            <ImgPrev img="00ShinyLemon"/>

        </div>
    )
}
export default ImgShow;