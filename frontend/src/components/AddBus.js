import React, {Component} from 'react';
import axios from 'axios';
//import '../styles/AddPatient.css';
import {Link} from "react-router-dom";
//import logo from '../images/logo.png';
//import SideNavigation from './PatientSideNavBar';
import '../styles/AddBus.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class AddBus extends Component{ 

    
render(){
    return(
    <div className="containar">
        <div className="row header">
            <div className="col-12">
            </div>
        </div>

        <div className="row">
            <div className="col-2 mainlinks">
                <ul>
                <Link to="/AddBus"><li><button className="btn btn-success">Add New Shedule</button></li></Link>
                <Link to="/ViewBus"><li><button className="btn btn-success">View Shedules</button></li></Link>
                <Link to="/ViewBus"><li><button className="btn btn-success">Edit Shedules</button></li></Link>
                <Link to="/Add"><li><button className="btn btn-success">Add Bus</button></li></Link>
                    
                </ul>
            </div>
            
            <div className="col-10 form">
            <p className="mainHeader">Add New Bus</p>
            
			
                
            
			

	
            </div>
        </div>


        
        

    </div>
    ) 
 }
}