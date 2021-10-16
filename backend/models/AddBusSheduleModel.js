const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const BusSchema =  mongoose.Schema({
    date : {
        type:Date
    },
    startLocation : {
        type:String
    },
    endLocation : {
        type:String
    },   
    departureTime : {
        type:String
    },
    arrivalTime : {
        type:String
    },
    kilometers : {
        type:String
    },
    price : {
        type:String
    }
},{timesamps:true})

const Bus = mongoose.model('Bus', BusSchema);

module.exports = {Bus}