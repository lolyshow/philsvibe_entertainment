import React from "react";
import {Link} from "react-router-dom";

function Footer(){
    return(
    <section className = "section footer bg-dark text-white">

        <div className="container">
            <div className = "row">
                <div className = "col-md-4">
                    <h6>Company information</h6>
                    <hr/>
                    <p>Profile Summary I am an innovative, meticulous and result-oriented Software Engineer with over 3 years of Experience in developing dynamic Web Application software, Desktop Application, USSD Application and Mobile Application. I am an exceptional developer who has successfully executed software applications that supports large number of traffic in a second, mentored upcoming Software Engineers, and developed innovative ICT solutions for various organizations. I’m always eager to lean, seek and acquire various technical skills that are very useful in the execution of my role as a software engineer </p>
                </div>

                <div className = "col-md-4">
                    <h6>Quick Link</h6>
                    <hr/>
                    <div><Link to="/" >Home</Link></div>
                    <div><Link to="/about" >About</Link></div>
                    <div><Link to="/contact" >Contact</Link></div>
                    <div><Link to="/blog" >Blog</Link></div>
                </div>


                <div className = "col-md-4">
                    <h6>Contact Information</h6>
                    <hr/>
                    <div><p className = "text-white mt-1">No 10, Trombi Close, Lagos State, Nigeria</p></div>
                    <div><p className = "text-white mt-1">+2347035666498</p></div>
                    <div><p className = "text-white mt-1">olalerephilip@gmail.com</p></div>
                    <div><p className = "text-white mt-1">@philsvibe</p></div>
                </div>
            </div>
            
        </div>
    </section>
    )
}
export default Footer;