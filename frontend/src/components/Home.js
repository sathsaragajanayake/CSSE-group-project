
import logo from '../images/logo.png';
import logoMenu from '../images/menu_mobile.jpg';
import busImage from '../images/bus_01.jpg';
import React, {Component} from 'react';
import  '../styles/app.css';
//import {Link} from "react-router-dom";
//import { FaUser, FaEye } from "react-icons/fa";

class Home extends Component{

    render(){
        return(
           
            <div className="container">
                <div className ="headingHome">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="menubar">
                        <nav className="nav_sideNavigation">
                            <ul className="ul_SideNavigation">
                                <li ><a className="current" href="/" >HOME</a></li>
                                <li className=""><a href="#">SHEDULES</a></li>
                                <li className=""><a href="#">WALLET</a></li>
                                <li className=""><a href="/login">LOGIN</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="logomenu">
                        <img alt="menu" src={logoMenu}></img>
                    </div>
                </div>
                <div className="content">
                    <img src={busImage}/>
                </div>
            </div>
       
       
        )
    }

}
export default Home;