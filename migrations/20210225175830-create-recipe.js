'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('recipes', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        api: {
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        servings: {
            type: Sequelize.INTEGER
        },
        readyInMinutes: {
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
        await queryInterface.dropTable('recipes');
    }
};