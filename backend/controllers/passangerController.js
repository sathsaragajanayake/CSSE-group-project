const { Passanger } = require("../models/passanger");

const getpassangerDetailsForLocation = async (req,res) => {
  
    console.info('======= Querying Location for ', req.params.startLocation)
    try{  
        //const startLocation = new StartLocation(req.params.startLocation); 
      const passanger = await Passanger.find({startLocation:req.params.startLocation })
     res.status(200).send(passanger);
    }catch(err){
      console.log(err)
      res.status(502).send(err)
    } 
  
  }
  const getDetails = async (req, res) => {
    await Passanger.find(function (err, passanger) {
      if (err) console.log(err);
      else {
        res.json(passanger);  
      }
    });
  };
  module.exports = {
    getpassangerDetailsForLocation,
    getDetails
  };