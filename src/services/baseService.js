class BaseService {
  constructor(model) {
    this.model = model;
    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
    this.findById = this.findById.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }

  async create(data) {
    try {
      let newObj = await this.model.create(data);
      return newObj;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async findAll() {
    try {
      let objects = await this.model.findAll();
      return objects;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async findById(id) {
    try {
      const queryObj = await this.model.findByPk(id);
      if (queryObj === null) {
        throw new Error(
          `There are no ${this.model.tableName} for the given id`
        );
      }
      return queryObj;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async updateById(id, data) {
    try {
      await this.model.update(data, {
        where: { id: id },
      });
      const updatedObj = await this.model.findByPk(id);
      return updatedObj;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async deleteById(id) {
    try {
      const deleteCount = await this.model.destroy({
        where: {
          id: id,
        },
      });
      if (deleteCount === 0) {
        throw new Error(
          `There are no ${this.model.tableName} with the give id.`
        );
      }
      return {
        msg: `${deleteCount} ${this.model.tableName} deleted successfully!`,
      };
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = BaseService;
