const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        gname: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 30,



        },
        sname: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 30,



        },
        venue: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
           



        },
        gMapLink: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 100,



        },
        

        date: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 30,



        },

        startTime: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 30,



        },

        endTime: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 30,



        },
        email: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 200,
            unique: true



        },
        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 1024,



        },


    },
    {
        timestamps: true,
    }
)
const userModel = mongoose.model('User', userSchema)
module.exports = userModel