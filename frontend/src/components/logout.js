import React, { Component, useState,useEffect} from 'react'
import { FaReply, FaBan, FaAngleRight } from 'react-icons/fa';
import axios from 'axios';
import {Link, useParams,useHistory } from 'react-router-dom'
import '../styles/logout.css';
import logo from '../images/logo.png';
import OIP from '../images/logout.jpg';
import '../styles/AddBusShedule.css';
import 'bootstrap/dist/css/bootstrap.css';

const LOgout = () => {
    const history =useHistory();
    const homepage = () =>{
        history.push("/");
    }

    const dashbordConsultant = () =>{
        history.push("/ViewBus");
    }

        return (
            <div>
            <br></br> <br></br> <br></br>
        <center>         
            <div className="container">
            <div
            class="form-group w-25"
            className="shadow p-5"
            style={{
              width: "96rem",
              height: "1rem",
              backgroundColor: "#c2c2d6",
              marginTop: -74,
              marginLeft: -120,
              paddingTop: 50,
            }}
          >
            <div class="logo" style={{
              marginTop: -90,
              paddingTop: 50,
            }}>
              <img src={logo} alt="logo" />
            </div>
            <div class="OIP">
                <img style={{
              width: "60rem",
              height: "-",
              marginLeft:-600,
              marginTop: 100,
            }} src={OIP} alt="OIP"/>
        </div>
            {/* <Dashboard_heading/> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="heading" style={{ 
     marginLeft:1000,
     marginTop: -650,
 }}>
                    <h2>SHEDULE DASHBOARD</h2>
                </div>
            
            <div className="row">
            {/* <div className="col-2 mainlinks">
                <ul>
                <Link to="/AddBus"><li><button width="50px" className="btn btn-success">ADD NEW SHEDULE</button></li></Link>
                <Link to="/ViewBus"><li><button className="btn btn-success">VIEW SHEDULE</button></li></Link>
                <Link to="/passangerData"><li><button className="btn btn-success">PASSANGER COUNT</button></li></Link>
                <Link to="/logout"><li><button className="btn btn-success">LOG OUT</button></li></Link>
                </ul>
            </div> */}
                <div
     class='form-group w-25'
     className='shadow p-5'
     style={{ width: '30rem', height:'20rem',
     backgroundColor: "#c2c2d6",
     marginLeft:1000,
     marginTop:90,
    paddingTop: 50 }}
   >  
            <div className="container">
                <form >
                    <h3>LOGOUT</h3>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="title">Do You Want To Logout Now?.....</label>
                    </div>
                   
                    <br/>
                    <br/>
                    <table>
                        <tr>
                            <td>
                    <button onClick={homepage} style={{ marginLeft:-50,marginTop:0, }}className="btn btn-danger"><i className="fa fa-" aria-hidden="true"></i><FaAngleRight/>YES</button>
                   </td>
                   <td>
                    <Link to="/ViewBus"> <input type="submit" value="NO" className="btn btn-danger"/></Link>
                    </td>
                    </tr>

                    </table>
</form>
    </div>
    </div>
    </div>
 

            </div>
           </div> </center>
            </div>
            
        )
    }

    export default LOgout;
