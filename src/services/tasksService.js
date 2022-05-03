const BaseService = require("@BaseService");
const { Task } = require('../../models/index')
class TasksService extends BaseService {
  constructor(model) {
    super(model);
  }
}

module.exports = new TasksService(Task);
