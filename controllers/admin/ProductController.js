const ProductService = require("../../services/admin/ProductService");


const ProductController = {
    add:async(req,res)=>{
        const cover = req.file?`/productuploads/${req.file.filename}`:""
        const {name,introduction,detail} = req.body
        await ProductService.add({name,introduction,detail,cover,createTime:new Date()})
        res.send({
            ActionType:'OK'
        })
    },
    getList:async(req,res)=>{
        const result = await ProductService.getList({_id:req.params.id})
        res.send({
            ActionType:'OK',
            data:result
        })
    },
    publish:async(req,res)=>{
        await ProductService.publish({...req.body,editTime:new Date()})
        res.send({
            ActionType:'OK'
        })
    },
    delList:async(req,res)=>{
        await ProductService.delList({_id:req.params.id})
        res.send({
            ActionType:'OK'
        })
    },
    updateList:async(req,res)=>{
        const cover = req.file?`/productuploads/${req.file.filename}`:""
        const {_id,name,introduction,detail} = req.body
        await ProductService.updateList({_id,name,introduction,detail,cover,createTime:new Date()})
        res.send({
            ActionType:'OK'
        })
    }
}

module.exports = ProductController;