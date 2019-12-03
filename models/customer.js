module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Customer', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    customer_name: { type: DataTypes.STRING, allowNull: false },
    devoured_burgers: { type: DataTypes.BOOLEAN, defaultValue: false }
  });
};
