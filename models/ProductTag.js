const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      // define id column
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      // define product_id column
      type: DataTypes.INTEGER,
      references: {
        // references the product model's id
        model: 'product',
        key: 'id',
      },
      tag_id: {
        // define tag_id column
        type: DataTypes.INTEGER,
        references: {
          // references the tag model's id
          model: 'tag',
          key: 'id',
        },
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
