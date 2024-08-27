'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class NotebookChapters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NotebookChapters.init(
    {
      title: DataTypes.STRING,
      notes: DataTypes.BLOB,
      notebookId: DataTypes.NUMBER,
      parentNotebookChapterId: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: 'NotebookChapters',
    }
  )

  NotebookChapters.associate = function (models) {
    NotebookChapters.belongsTo(models.Notebooks, {
      foreignKey: 'notebookId',
      onDelete: 'CASCADE',
    })
    NotebookChapters.belongsTo(models.NotebookChapters, {
      foreignKey: 'parentNotebookChapterId',
      onDelete: 'CASCADE',
    })
  }

  return NotebookChapters
}
