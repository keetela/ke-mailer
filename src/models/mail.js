export default (sequelize, DataTypes) => {
  const Mail = sequelize.define(
    'Mail',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
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
