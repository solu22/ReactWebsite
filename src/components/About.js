import React from "react";
import Common from "./Common";
import images from "../Img/img2.png";

const About= ()=>{
    return(
        <>
        <Common name="We love coffee and code"
        img src={images}
        visit="/services"
        btname="Go to Services"
         />
        </>
    );
};

export default About;