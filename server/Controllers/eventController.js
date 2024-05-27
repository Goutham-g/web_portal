const eventModel = require("../Models/eventModel");



const createEvent = async (req,res)=>{
  const {email,gname,sname, venue, gMapLink,startTime,endTime,date } = req.body;
  console.log(req.body);

   
  //  console.log("req", req);
    try {
      let event = await eventModel.findOne({ email })

      if (event) return res.status(400).json("Event already exist")


        
      event = new eventModel({
        email,
        gname,
        sname,
        venue,
        gMapLink,
        startTime,
        endTime,
        date,
       
      });
      await event.save();
      res.status(200).json(event);
    } catch (error) {
      res.status(500).json('Server error 2');
    }

}

module.exports = { createEvent  }