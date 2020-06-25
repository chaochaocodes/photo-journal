const mongoose = require('mongoose');

const EntrySchema = mongoose.Schema({
    prompt: {
        type: String,
        required: true
    },
    title: String,
    photo: String,
    description: {
        type: String,
        required: true 
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// create 'Entries' db in Atlas
module.exports = mongoose.model('Entries', EntrySchema)