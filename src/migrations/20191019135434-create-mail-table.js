export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Mails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      receiver: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sender: {
        type: Sequelize.STRING,
        allowNull: false
      },
      subject: {
        type: Sequelize.STRING,
        allowNull: false
      },
      text: {
        type: Sequelize.STRING,
        allowNull: true
      },
      receiver_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      messages: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      service_id: {
        type: Sequelize.TEXT,
        allowNull: false
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
  down: async (queryInterface) => {
    await queryInterface.dropTable('Mails');
  }
};
