var express = require('express');
const NewsController = require('../../controllers/admin/NewsController');

const multer  = require('multer')
const upload = multer({ dest: 'public/newsuploads/' })

var NewsRouter = express.Router();

NewsRouter.post("/adminapi/news/add",upload.single('file'),NewsController.add)
NewsRouter.get("/adminapi/news/list/:username",NewsController.getList)
NewsRouter.get("/adminapi/news/list/:username/:id",NewsController.getList)
NewsRouter.post("/adminapi/news/list",upload.single('file'),NewsController.updateList)
NewsRouter.put("/adminapi/news/publish",NewsController.publish)
NewsRouter.delete("/adminapi/news/list/:id",NewsController.delList)
module.exports = NewsRouter;