import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class TableRow extends Component{ // create table two component to get the conference details into a table
    
     //Delete Method
     Delete = (id) => {
        console.log(id);
        axios
          .post(
            "http://localhost:3001/bus/delete/" + id
          )
          .then((response) => {
            alert("Successfully Deleted !");
            window.location = "/ViewBus";
          });
      };
    render(){
        return (
            <tr>
                <td>
                    {this.props.obj.date.substr(0,10)}
                </td>
                <td>
                    {this.props.obj.startLocation}
                </td>
                <td>
                    {this.props.obj.endLocation}
                </td>
                <td>
                    {this.props.obj.departureTime}
                </td>
                <td>
                    {this.props.obj.arrivalTime}
                </td>
                <td>
                    {this.props.obj.kilometers}
                </td>
                <td>
                    {this.props.obj.price}
                </td>
                <td>

                    <Link to={"/edit/" + this.props.obj._id} className="btn btn-warning btn-sm"><i className="fas fa-edit">Edit</i></Link>
                </td>
                <td>
          <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.Delete(this.props.obj._id)}
                      style={{ color: "black" }}
                    >
                      <i className="fas fa-trash"></i> DELETE
                    </button>
        </td>
            </tr>
        );
    }
}

export default TableRow;