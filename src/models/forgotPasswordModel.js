const mongoose =require('mongoose')
const forgotPasswordSchema = new mongoose.Schema({
    userId:String,
    uniqueString:String,
    createdAt:Date,
    expiresAt:Date
})

module.exports = mongoose.model('forgotPassword',forgotPasswordSchema)