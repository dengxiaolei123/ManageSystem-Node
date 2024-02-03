const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//product模型===>products集合

const ProductType = {
    name:String,
    introduction:String,
    detail:String,
    cover:String,
    createTime:Date,
} 
const ProductModel = mongoose.model('product',new Schema(ProductType))

module.exports = ProductModel