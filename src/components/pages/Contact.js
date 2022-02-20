import React from 'react';

function Contact(){
    return(
      <div>
        <section className = "py-4 bg-info">
          <div className="container">
              <div className = "row">
                  <div className = "col-md-4 my-auto">
                    <h4>Contact Us</h4>
                  </div>
                  <div className = "col-md-8 my-auto">
                      <h3 className = "float-end"> Home / Contact Us</h3>
                      
                  </div>
              </div>
          </div>
        </section>

        <section className = "section">
          <div className = "container">
            <div className = "card shadow mt-5">
              <div className = "card-body">
                <div className = "row">
                  <div className = "col-md-6 border-right">
                    <h6>Contact Form</h6>
                    <hr/>

                    <div className = "form-group">
                      <label className = "mt-1">Full Name</label>
                      <input type = "text" className = "form-control" name = ""  placeholder = "Please Enter your full name"/>
                    </div>


                    <div className = "form-group">
                      <label className = "mt-1">Phone Number</label>
                      <input type = "text" className = "form-control" name = ""  placeholder = "Please Enter your Phone Number"/>
                    </div>


                    <div className = "form-group">
                      <label className = "mt-1">Emaill Addess</label>
                      <input type = "text" className = "form-control" name = ""  placeholder = "Please Enter your Email Address"/>
                    </div>

                    <div className = "form-group">
                      <label className = "mt-1">Message</label>
                      <textarea row = "2" className = "form-control" name = ""  placeholder = "Type your message here"/>
                    </div>

                    <div className = "form-group py-3">
                      <button className = "btn btn-primary shadow w-100" > Send Message</button>
                    </div>
                  </div>


                  <div className = "col-md-6 border-start">
                    <h5 className = "main-heading">Address Information</h5>
                    <div className= "underline"></div>
                    <p>No 10, Trombi close, Oshodi, Lagos State. Nigeria</p>
                    <p>Phone: +2347035666498</p>
                    <p>Email: phil.olalere@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}   

export default Contact;