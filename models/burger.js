module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Burger', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    burger_name: { type: DataTypes.STRING, allowNull: false, validate: { len: [1, 20] } },
    devoured: { type: DataTypes.BOOLEAN, defaultValue: false }
  });
};
