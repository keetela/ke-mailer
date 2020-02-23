export default (sequelize, DataTypes) => {
  const Mail = sequelize.define(
    'Mail',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      receiver: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false
      },
      text: {
        type: DataTypes.STRING,
        allowNull: true
      },
      receiver_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      messages: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      service_id: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {

    }
  );
  return Mail;
};
