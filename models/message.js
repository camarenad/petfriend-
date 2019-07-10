const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const msgSchema = new Schema({
    msg: {
        type: {String},
        required: true,
        max: 2000
    },
    users: [{
        user:  { type: Schema.Types.ObjectId, ref: 'User' , required:true}
    }],
    sender: {type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
    read: { type:Date }
},{
    timestamps: true
})

module.exports = mongoose.model('Message',msgSchema)


