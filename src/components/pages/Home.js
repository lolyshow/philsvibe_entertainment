import React from 'react';
import Visa from "../images/visa-card.png";
import Paypal from "../images/paypal.png";
import Discover from "../images/discover.png";
import CardCard from "../images/card-card.png";
import Space from '../incs/Space';
import Slider from "../incs/Slider";
import {Link} from "react-router-dom";
import VMC from "../pages/VMC/VMC";
import Service1 from "../images/visa-card.png";
class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          cardNumber: '4324 5433 9382 1030',
          expDate:"03/24",
          securityCode:"420",
          postalCode:10119,
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChangeExpDate = this.handleChangeExpDate(this);
        // this.handleChangePostalCode = this.handleChangePostalCode(this);
        // this.hanl
      }
    
      handleChange(event) {
        this.setState({cardNumber: event.target.value});
      }

      handleChangeExpDate(event) {
        this.setState({expDate: event.target.value});
      }

      handleChangePostalCode(event) {
        this.setState({postalCode: event.target.value});
      }

      handleChangeSecurityCode(event) {
        this.setState({securityCode: event.target.value});
      }
    
      handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }


    render(){
        return(
        <div>
            <Slider />
            <section className = "section">
                <div className="container">
                    <div className = "row">
                        <div className = "col-md-12 text-center mt-5">
                           <h3 className = "main-heading"> Our Company</h3>
                           <div className = "underline mx-auto"></div>
                           <p>Profile Summary I am an innovative, meticulous and result-oriented Software Engineer with over 3 years of Experience in developing dynamic Web Application software, Desktop Application, USSD Application and Mobile Application. I am an exceptional developer who has successfully executed software applications that supports large number of traffic in a second, mentored upcoming Software Engineers, and developed innovative ICT solutions for various organizations. I’m always eager to lean, seek and acquire various technical skills that are very useful in the execution of my role as a software engineer </p>
                            <Link to="/about" className = "btn btn-warning shadow">Read More</Link>
                        </div>
                        {/* left-side payment information start */}
                    </div>
                </div>
            </section>

            {/* Our Vision and Values */}

            

            <VMC />

            {/* Our Services */}


            <section className = "section border-top">
                <div className="container">
                    <div className = "row">
                        <div className = "col-md-12 mb-4 text-center">
                            <h3 className = "main-heading"> Our Servces</h3>
                            <div className = "underline mx-auto"></div>
                        </div>

                        <div className = "col-md-4">
                            <div className = "card shadow">
                            <img src = {Service1} className = "w-100 border-bottom" alt = ""/>

                                <div className = "card-body">
                                    <h6>Service 1</h6>
                                    <div className = "underline"></div>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                    </p>
                                    <Link to  = "/services" className = "">Read More</Link>
                                </div>
                            </div>
                        </div>

                        <div className = "col-md-4">
                            <div className = "card shadow">
                            <img src = {Service1} className = "w-100 border-bottom" alt = ""/>

                                <div className = "card-body">
                                    <h6>Service 2</h6>
                                    <div className = "underline"></div>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                    </p>
                                    <Link to  = "/services" className = "">Read More</Link>
                                </div>
                            </div>
                        </div>


                        <div className = "col-md-4">
                            <div className = "card shadow">
                            <img src = {Service1} className = "w-100 border-bottom" alt = ""/>

                                <div className = "card-body">
                                    <h6>Service 3</h6>
                                    <div className = "underline"></div>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                    </p>
                                    <Link to  = "/services" className = "">Read More</Link>
                                </div>
                            </div>
                        </div>


                        
                    </div>
                </div>
            </section>
        
        
        </div>
        );
    }
}   

export default Home;