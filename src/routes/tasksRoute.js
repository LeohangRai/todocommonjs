const Router = require("express").Router();
const taskCtrl = require("../controllers/tasksController");

Router.get("/", taskCtrl.findAll);
Router.get("/:id", taskCtrl.findById);
Router.post("/", taskCtrl.create);
Router.put("/:id", taskCtrl.updateById);
Router.delete("/:id", taskCtrl.deleteById);

module.exports = Router;
