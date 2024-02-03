const ProductModel = require("../../models/ProductModel");


const ProductService = {
    add:async({name,introduction,detail,cover,createTime})=>{
        return ProductModel.create({name,introduction,detail,cover,createTime})
    },
    getList:async({_id})=>{
        return _id?ProductModel.find({_id}):ProductModel.find({})
    },
    publish:async({_id,isPublish,editTime})=>{
        console.log(editTime);
        return ProductModel.updateOne({_id},{
            isPublish,
            editTime
        })
    },
    delList:async({_id})=>{
        return ProductModel.deleteOne({_id})
    },
    updateList:async({_id,name,introduction,detail,cover,createTime})=>{
        if(cover){
            return ProductModel.updateOne({_id},{name,introduction,detail,cover,createTime})
        }else{
            return ProductModel.updateOne({_id},{name,introduction,detail,createTime})
        }
       
    }
}

module.exports = ProductService;