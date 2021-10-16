import React, {Component} from 'react';
import axios from 'axios';
//import '../styles/AddPatient.css';
import {Link} from "react-router-dom";
import logo from '../images/logo.png';
//import SideNavigation from './PatientSideNavBar';
import '../styles/AddBusShedule.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class AddBusDetails extends Component{ 

    constructor(props){
        super(props);
        this.onChangeDate=this.onChangeDate.bind(this);
        this.onChangeStartLocation=this.onChangeStartLocation.bind(this);
        this.onChangeEndLocation = this.onChangeEndLocation.bind(this);
        this.onChangeDepartureTime = this.onChangeDepartureTime.bind(this);
        this.onChangeArrivalTime = this.onChangeArrivalTime.bind(this);
        this.onChangeKilometers = this.onChangeKilometers.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onsubmit=this.onsubmit.bind(this);

        this.state={
            date: '', 
            startLocation: '',
            endLocation: '',
            departureTime:'',
            arrivalTime:'',
            kilometers:'',
            price:''
        }
    }
    onChangeDate(e){

        console.log(e.target.value)
        this.setState( {
            date: e.target.value
        });
        
    }
    onChangeStartLocation(e){
        this.setState({
            startLocation:e.target.value
        });
    }
    onChangeEndLocation(e){
        this.setState({ 
            endLocation:e.target.value
        });
    }
    onChangeDepartureTime(e){
        this.setState({
            departureTime:e.target.value
        });
    }
    onChangeArrivalTime(e){
        this.setState({
            arrivalTime:e.target.value
        });
    }
    onChangeKilometers(e){
        this.setState({
            kilometers:e.target.value
        });
    }
    onChangePrice(e){
        this.setState({
            price:e.target.value
        });
    }


    onsubmit(e){
        
        e.preventDefault();
        const obj= {
            date : this.state.date,
            startLocation : this.state.startLocation,
            endLocation : this.state.endLocation,
            departureTime : this.state.departureTime,
            arrivalTime : this.state.arrivalTime,
            kilometers : this.state.kilometers,
            price : this.state.price
        };
        axios.post('http://localhost:3001/bus/add',obj).then(res=>{alert("Successfull")}); // add the patient details to mongo db
        
        
    }
// get the table structure for add conference details
render(){
    return(
    <div className="containar">
     <div
            class="form-group w-25"
            className="shadow p-5"
            style={{
              width: "96rem",
              height: "1rem",
              backgroundColor: "#c2c2d6",
              marginTop: 1,
              marginLeft: -5,
              paddingTop: 50,
            }}
          >
            <div class="logo" style={{
              marginTop: -90,
              paddingTop: 50,
            }}>
              <img src={logo} alt="logo" />
            </div>
            <div className="col-12">
            </div>
        </div>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
        <div className="row">
            <div className="col-2 mainlinks">
                <ul>
                <Link to="/AddBus"><li><button className="btn btn-success">ADD NEW SHEDULE</button></li></Link>
                <Link to="/ViewBus"><li><button className="btn btn-success">VIEW SHEDULE</button></li></Link>
                <Link to="/passangerData"><li><button className="btn btn-success">PASSANGER COUNT</button></li></Link>
                <Link to="/logout"><li><button className="btn btn-success">LOG OUT</button></li></Link>
                </ul>
            </div>
            
            {/* <div className="col-10 form">
            <p className="mainHeader">Add New Bus Shedule</p> */}
            
            <div
     class='form-group w-25'
     className='shadow p-5'
     style={{ width: '40rem', height:'36rem',
     backgroundColor: "#c2c2d6",
     marginLeft:300,
     marginTop:-100,
    paddingTop: 50 }}
   >     

        <div style={{marginTop:10}}>
          <h3 className = 'header2'> <center>ADD BUS SHEDULE </center></h3>
			<form onSubmit={this.onsubmit}>
            <table>
  
  <tr>
    <td><p>Select Date</p><input type="date" value={this.state.date} onChange={this.onChangeDate} required></input></td>
   
  </tr>
  <tr>
    <td><label for="cars">Start Location</label>
<select id="cars" name="cars"  value={this.state.startLocation} onChange={this.onChangeStartLocation} required>
<option value="Kandy">Kandy</option>
  <option value="Karunagala">Kurunagala</option>
  <option value="Colombo">Colombo</option>
  <option value="Nuwara">Nuwara</option>
  <option value="Sigiriya">Sigiriya</option>
  <option value="Kaduwela">Kaduwela</option>
</select> </td>
<td><label for="cars">End Location</label>
<select id="cars" name="cars"   value={this.state.endLocation} onChange={this.onChangeEndLocation} required>
<option value="Malabe">Malabe</option>
  <option value="Elpitiya">Elpitiya</option>
  <option value="Galle">Galle</option>
  <option value="Mapalagama">Mapalagama</option>
  <option value="Ambalangoda">Ambalangoda</option>
  <option value="Wathugedara">Wathugedara</option>
</select> </td>
  
  </tr>

  <tr>
  
<td><p>DepartureTime</p><input type="time"  value={this.state.departureTime} onChange={this.onChangeDepartureTime} required></input></td>
    <td><p>ArrivalTime</p><input type="time"  value={this.state.arrivalTime} onChange={this.onChangeArrivalTime} required></input></td>
    
  </tr>

  <tr>
  
  
      <td><p>Kilometers</p><input type="text" placeholder="Enter Kilometers"  value={this.state.onChangeKilometers} onChange={this.onChangeKilometers} required></input></td>
      <td><p>Price</p><input type="text" placeholder="Enter Price"  value={this.state.onChangePrice} onChange={this.onChangePrice} required></input></td>
    </tr>

    {/* <tr>
  
  
      <td></td>
      <td><button className="btn btn-success" onClick={this.onsubmit}>Add Item</button></td>
    </tr> */}
    <br></br>
    <div className="form-group">
                     <input type="submit" value="ADD SHEDULE" className="btn btn-primary"/>
                 </div>
  
</table> 
</form>
</div>
				
			

	
            </div>
        </div>


        
        

    </div>
    ) 
 }
}