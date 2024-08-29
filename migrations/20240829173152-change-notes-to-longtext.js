'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('NotebookChapters', 'notes', {
      type: Sequelize.TEXT('long'),
      allowNull: true, // Adjust this based on your requirements
    })
  },

  async down(queryInterface, Sequelize) {
    // Revert the change if necessary
    await queryInterface.changeColumn('NotebookChapters', 'notes', {
      type: Sequelize.BLOB, // Replace with the original data type
      allowNull: true, // Adjust this based on your requirements
    })
  },
}
