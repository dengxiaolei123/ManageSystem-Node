const NewsModel = require("../../models/NewsModel");


const NewsService = {
    add:async({title,content,category,cover,isPublish,editTime,username})=>{
        return NewsModel.create({title,content,category,cover,isPublish,editTime,username})
    },
    getList:async({_id,username})=>{
        return _id?NewsModel.find({_id,username}):NewsModel.find({username})
    },
    publish:async({_id,isPublish,editTime})=>{
        console.log(editTime);
        return NewsModel.updateOne({_id},{
            isPublish,
            editTime
        })
    },
    delList:async({_id})=>{
        return NewsModel.deleteOne({_id})
    },
    updateList:async({_id,title,content,category,cover,isPublish,editTime})=>{
        if(cover){
            return NewsModel.updateOne({_id},{title,content,category,cover,isPublish,editTime})
        }else{
            return NewsModel.updateOne({_id},{title,content,category,isPublish,editTime})
        }
       
    }
}

module.exports = NewsService;