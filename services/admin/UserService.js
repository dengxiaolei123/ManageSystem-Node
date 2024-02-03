const UserModel = require("../../models/UserModel");



const UserService = {
    login:async ({username,password})=>{
        return UserModel.find({
            username,
            password
        })
    },
    upload:async ({_id,username,introduction,gender,avatar})=>{
        if(avatar){
            return UserModel.updateOne({_id},{
                username,
                introduction,
                gender,
                avatar
            })
        }else{
            return UserModel.updateOne({_id},{
                username,
                introduction,
                gender
            })
        }
       
    },
    add:async ({username,introduction,gender,avatar,password,role})=>{
        if(UserModel.find({username})){
            return "用户名已存在"
        }
       return UserModel.create({
        username,introduction:introduction===''?'这个人很懒,什么都没留下~':introduction,gender,avatar,password,role
       })
    },
    getList:async({id})=>{
        return id?UserModel.find({_id:id},["username","role","introduction","password"]):UserModel.find({},["username","role","avatar","introduction","gender"])
    },
    delList:async({_id})=>{
        return UserModel.deleteOne({_id})
    },
    putList:async(body)=>{
        if(UserModel.find({username:body.username})){
            return "用户名已存在"
        }
        return  UserModel.updateOne({_id:body._id},body)
    }
}

module.exports = UserService;