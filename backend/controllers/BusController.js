const endOfDay =  require("date-fns/endOfDay");
const startOfDay = require("date-fns/startOfDay");
const { Bus } = require("../models/AddBusSheduleModel");


const AddDetails = async (req, res, next) => {
  let bus = new Bus(req.body);
  await bus
    .save()
    .then((Bus) => {
      res.status(200).json({ bus: "Bus Shedule is added succesfully" });
    })
    .catch((err) => {
      res.status(400).send("unable to save database");
    });
};
const getDetails = async (req, res) => {
  await Bus.find(function (err, bus) {
    if (err) console.log(err);
    else {
      res.json(bus);  
    }
  });
};
const editDetails = async (req, res) => {

  const busDAta = await Bus.findById(req.params.id);
  res.status(200).send(busDAta);

  // await Bus.findById(req.params.id, function (err, bus) {
  //   res.json(bus);
  // });
};
const updateDetails = async (req, res) => {
  await Bus.findById(req.params.id, function (err, bus) {
    console.log(req.body);
    if (!bus) res.status(404).send("data is not found");
    else {
      bus.date = req.body.date;
      bus.startLocation = req.body.startLocation;
      bus.endLocation = req.body.endLocation;
      bus.departureTime = req.body.departureTime;
      bus.arrivalTime = req.body.arrivalTime;
      bus.kilometers = req.body.kilometers;
      bus.price = req.body.price;
      bus
        .save()
        .then((bus) => {
          console.log(bus);
          res.json(bus);
        })
        .catch((err) => {
          res.status(400).send("unable to update database ");
        });
    }
  });
};
const deleteDetails = async (req, res) => {
  await Bus.findByIdAndRemove(
    { _id: req.params.id },
    function (err, bus) {
      if (err) res.json(err);
      else res.json("successfully removed");
    }
  );
};

const getbusDetailsForDate = async (req,res) => {
  
  console.info('======= Querying date for ', req.params.date)
  try{
    const date = new Date(req.params.date);    
    const bus = await Bus.find({date: {
      $gte: startOfDay(date),
      $lte:endOfDay(date)
    }})
   res.status(200).send(bus);
  }catch(err){
    console.log(err)
    res.status(502).send(err)
  } 

}


module.exports = {
  AddDetails,
  getDetails,
  editDetails,
  updateDetails,
  deleteDetails,
  getbusDetailsForDate,
};

