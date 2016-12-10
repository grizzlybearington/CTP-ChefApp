'use strict';
module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD:models/chef.js
  var Chef = sequelize.define('Chef', {
    first_name: DataTypes.STRING
=======
  var Author = sequelize.define('Author', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }

    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [0,500],
        notEmpty: true
      }
    }
>>>>>>> sang:models/author.js
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
<<<<<<< HEAD:models/chef.js
  return Chef;
};
=======
  return Author;
};
>>>>>>> sang:models/author.js
