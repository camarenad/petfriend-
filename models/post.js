const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    content: {
        type: String,
        min: 1,
        max: 2000,
        required: true
    },
    picture: {
        type: String,
        required: true,
    },
    zipCode: {
        type: Number,
        required: true,
        min: 5,
        max: 10
    },
    petName: {
        type: String,
        required: true,
        max: 15
    },
    petAge: {
        type: Number,
        required: true,
        max: 2
    },
    petBreed: {
        type: String,
    },
    petSpecies: {
        type: String,
        required: true
    }, 
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema)