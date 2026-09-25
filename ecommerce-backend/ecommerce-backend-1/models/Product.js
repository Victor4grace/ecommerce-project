import Sequelize from 'sequelize';
import { sequelize } from './index.js';

// const { DataTypes } = Sequelize;

export const Product = sequelize.define('Product', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rating: {
    type: Sequelize.JSON,
    allowNull: false
  },
  priceCents: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  keywords: {
    type: Sequelize.STRING,
    allowNull: false,
    get() {
      return this.getDataValue('keywords').split(',');
    },
    set(val) {
      this.setDataValue('keywords', val.join(','));
    }
  },
  createdAt: {
    type: Sequelize.DATE(3)
  },
  updatedAt: {
    type: Sequelize.DATE(3)
  },
}, {
  defaultScope: {
    order: [['createdAt', 'ASC']]
  }
});
