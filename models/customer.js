module.exports = function(sequelize, DataTypes) {
  // Define the Customer Sequelize model
  var Customer = sequelize.define("Customer", 
    {
      // The name identifying the customer
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      classMethods: {
        // Customer may consume many burgers
        associate: function(models) {
          Customer.hasMany(models.Burger)
        }
      }
    });

  return Customer;
};
