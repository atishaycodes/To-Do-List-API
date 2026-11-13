const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },

    category: {
        type: String
    }
    , heading: {
        type: String
    }
})

const list = mongoose.model('list', listSchema);

module.exports = list;