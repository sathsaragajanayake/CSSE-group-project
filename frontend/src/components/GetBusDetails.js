import React, { Component } from "react";
import axios from "axios";
import TableRow from "../components/TableRow";
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import  '../styles/app.css';

export default class GetBusDetails extends Component {
  constructor(props) {
    super(props);

    this.onChangeDate=this.onChangeDate.bind(this);

    this.state = { bus: [], filterDate : null };
  }

  onChangeDate(e) {
    console.log(e.target.value);
    this.setData(e.target.value)
  }

  componentDidMount() {
    this.setData();
  }

  setData = (filter = null)  => {
    axios
    .get(`http://localhost:3001/bus/${filter ? filter : ''}`)
    .then((response) => {
      this.setState({ bus: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  tabRow() {
    return this.state.bus.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }
  //get the view of table
  render() {
    return (
      <div id="main">
        <div className="container">
        <div
            class="form-group w-25"
            className="shadow p-5"
            style={{
              width: "96rem",
              height: "1rem",
              backgroundColor: "#c2c2d6",
              marginTop: 1,
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
            <br></br>
          <div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            <h3 align="center" className="header2">
              {" "}
              VIEW CURRENT SHEDULES{" "}
            </h3>
            <div className="shadow p-5" style={{ backgroundColor: "#F0F8FF" }}>
              <table>
              <input
                type="date"
                value={this.state.date}
                onChange={this.onChangeDate}
              ></input></table>
              <br></br>
              <table className="table table-hover">
                <thead className="table-active">
                  <tr>
                    <th> Date</th>
                    <th> Start Location </th>
                    <th> End Location</th>
                    <th> Departure Time</th>
                    <th> Arrival Time</th>
                    <th> Kilometers</th>
                    <th> Price</th>
                    <th> EDIT</th>
                    <th> DELETE</th>
                  </tr>
                </thead>
                <tbody>{this.tabRow()}</tbody>
              </table>
              <table>
              <Link to="/AddBus">
                {" "}
                <input type="submit" value="BACK" className="btn btn-primary" />
              </Link>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
