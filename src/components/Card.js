import React from "react";
import {NavLink} from "react-router-dom";


const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt="img" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              This website is completely made with React and bootstrap5. I love to do web development stuffs. With chnaging technologies, we have to be updated everyday. Practice is the key to success.
            </p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
