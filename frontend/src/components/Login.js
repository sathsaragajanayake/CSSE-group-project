import React, {Component} from 'react';
import { FaHome, FaSignInAlt } from 'react-icons/fa';
import { Link, Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/Bus.jpg';
import admin from '../images/Admin.png';
import validator from 'validator'
import '../styles/login.css';


function Login (){
    const history =useHistory();
    const loginHandler = () =>{
        const consultant_email = "sureni@gmail.com";
        const consultant_password = "sureni123";
        const patient_email = "nethmi@gmail.com";
        const patient_password = "nethmi123";
        const appointment_email = "sanduni@gmail.com";
        const appointment_password = "sanduni123";

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value; 

        if((email == consultant_email) && (password == consultant_password)){
        if (validator.isEmail(email)) {
            history.push("/view");

          } else {
            alert('Enter valid Email!')
          }
        }else if((email == patient_email) && (password == patient_password)){
            if (validator.isEmail(email)) {
                alert('Valid Email :)')
                history.push("/ViewPatients");
              } else {
                alert('Enter valid Email!')
              }
           
        }
        else if((email == appointment_email) && (password == appointment_password)){
          if (validator.isEmail(email)) {
              alert('Successfully Logged in')
              history.push("/AddBus");
            } else {
              alert('Enter valid Email!')
            }
         
      }
        else{
            if (validator.isEmail(email)) {
                alert('Username and password not matching!')
                history.push("");
              } else {
                alert('Enter valid Email!')
              }
            
        }
    
    }

    return (
            <div className='wrapper'>    
                <img src={logo} alt="logo"/>
                <div className='loginbox' >
                <img src={admin} className='avatar' alt="logo"/>
                <h3>LOGIN</h3>
                <form>
                <p>User Name</p>
                <input type="text" placeholder="Enter Email Here" id="email" className='enter' required></input>
                <p className="lbPassword">Password</p>
                <input type="password" placeholder="Enter Password Here" id="password" className='enter' required></input>
                <button className="btn submit" onClick={loginHandler}><i className="fa fa-sign" aria-hidden="true"></i><FaSignInAlt/> LOGIN
                </button>
                <div className="login_links">
                    <ul className="ul_links">
                        <Link to="/register"><li className="li_links"><a className="link_items" href="#">Need To Register Now?</a></li></Link>
                        <Link to="/reset"><li className="li_links"><a className="link_items"href="#">Forgot Password?</a></li></Link>
                    </ul>
                </div>
                </form>
                </div>
               
            </div>
          
      
  );
    }

export default Login;