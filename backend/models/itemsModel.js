const mongoose = require('mongoose')

const Schema = mongoose.Schema
//Schema define the strucutre of a document in db, first argument for how object look.
const itemSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    load: {
        type:  Number,
        required: true
    }
    //Schema, second argument for adding created time
}, {timestamps: true})

//models apply the schema, and then used to interact

//Item is model's name
module.exports = mongoose.model('Item', itemSchema)
//in db a collection called Items(pluralized of Item) is created
