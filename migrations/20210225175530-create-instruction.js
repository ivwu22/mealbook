'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('instructions', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        stepNumber: {
            type: Sequelize.INTEGER
        },
        step: {
            type: Sequelize.TEXT
        },
        recipeId: {
            type: Sequelize.INTEGER
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('instructions');
    }
};
