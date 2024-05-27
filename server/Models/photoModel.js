const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
           



        },
        url: {
            type: String,
            required: true,
           



        },
        likes: { type: Number, default: 0 },
       


    },
    {
        timestamps: true,
    }
)
const photoModel = mongoose.model('Photo', imageSchema)
module.exports = photoModel