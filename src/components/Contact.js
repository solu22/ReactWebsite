import React, { useState } from "react";

const Contact = () => {
    const[userInput, setUserInput]= useState({
        fullname:"",
        phone: "",
        email: "",
        msg:"",
    });

    const handleChange =(event)=>{
        const{name,value}=event.target;
        setUserInput((preval)=>{
           return {
               ...preval,
               [name]: value,
           } 
        })

    }

    const formSubmit= (e)=>{
        e.preventDefault();
        alert(`Thank you for submitting the form. Here are the details: 
        fullname: ${userInput.fullname}.
        Phone: ${userInput.phone}. 
        Email: ${userInput.email}  
        Message: ${userInput.msg} `);
    };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your fullname"
                    name="fullname"
                    value={userInput.fullname}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                
                    placeholder="mobile number"
                  name="phone"
                  value={userInput.phone}
                  onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your Email address"
                  name="email"
                  value={userInput.email}
                  onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={""}
                  name="msg"
                  value={userInput.msg}
                  onChange={handleChange}/>
                </div>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
