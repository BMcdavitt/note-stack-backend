'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NotebookChapters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      notes: {
        type: Sequelize.BLOB,
      },
      notebookId: {
        type: Sequelize.INTEGER,
        references: { model: 'Notebooks', key: 'id' },
        onDelete: 'CASCADE',
      },
      parentNotebookChapterId: {
        type: Sequelize.INTEGER,
        references: { model: 'NotebookChapters', key: 'id' },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('NotebookChapters')
  },
}
