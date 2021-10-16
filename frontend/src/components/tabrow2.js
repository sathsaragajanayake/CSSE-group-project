import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class TableRow2 extends Component{ // create table two component to get the conference details into a table
    

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
                    {this.props.obj.token}
                </td>

            </tr>
        );
    }
}

export default TableRow2;