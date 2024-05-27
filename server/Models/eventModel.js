const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
  },
  gname: {
    type: String,
    required: true,
  },
  sname: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  gMapLink: {
    type: String,
    required: true,
  },

  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  
 
});

const eventModel = mongoose.model('Event', EventSchema)
module.exports = eventModel