module.exports = function(sequelize, DataTypes) {
  const Customer = sequelize.define('Customer', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    customer_name: { type: DataTypes.STRING, allowNull: false }
  });

  Customer.associate = models => {
    Customer.hasMany(models.Burger, {
      onDelete: 'cascade'
    });
  };

  return Customer;
};
