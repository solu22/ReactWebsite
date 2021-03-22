import React from "react";

import Card from "./Card";
import Data from "./Data";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Data.map((each_data, index)=>{
                return <Card 
                    key={index}
                    imgsrc={each_data.imgsrc}
                    title={each_data.title}
                    />
              })
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
