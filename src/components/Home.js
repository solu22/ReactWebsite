import React from "react";
import images from "../Img/img1.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
       name="Welcome to Home page"
       src={images}
       visit="/about"
       btname="Go to About Page"
       />
    </>
  );
};

export default Home;
