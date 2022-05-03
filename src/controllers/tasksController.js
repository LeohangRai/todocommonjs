const BaseController = require("@BaseController");
const tasksService = require('../services/tasksService')
class TasksController extends BaseController {
  constructor(service) {
   super(service) 
  }
}

module.exports = new TasksController(tasksService);
