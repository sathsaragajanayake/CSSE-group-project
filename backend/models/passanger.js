const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const PassangerSchema =  mongoose.Schema({
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
    },
    token : {
        type:String
    }
},{timesamps:true})

const Passanger = mongoose.model('Passanger', PassangerSchema);

module.exports = {Passanger}