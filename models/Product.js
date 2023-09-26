// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      // define id column
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      // define product_name column
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      // define price column
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
      stock: {
        // define stock column
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
          isNumeric: true,
        },
      category_id: {
        // define category_id column
        type: DataTypes.INTEGER,
        references: {
          // references the category model's id
          model: 'category',
          key: 'id',
        },
      },
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
