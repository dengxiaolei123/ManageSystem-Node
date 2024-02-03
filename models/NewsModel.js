const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//user模型===>users集合

const NewsType = {
    title:String,
    content:String,
    category:Number,
    cover:String,
    isPublish:Number,
    editTime:Date,
    username:String
} 
const NewsModel = mongoose.model('news',new Schema(NewsType))

module.exports = NewsModel