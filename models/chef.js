'use strict';
module.exports = function(sequelize, DataTypes) {
  var Chef = sequelize.define('Chef', {
    first_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Chef;
};