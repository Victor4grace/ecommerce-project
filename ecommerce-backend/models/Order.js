import Sequelize from 'sequelize';

import { sequelize } from './index.js';

export const Order = sequelize.define('Order', {

  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },

  orderTimeMs: {
    type: Sequelize.BIGINT,
    allowNull: false
  },

  totalCostCents: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  products: {
    type: Sequelize.JSON,
    allowNull: false
  },

  createdAt: {
    type: Sequelize.DATE
  },

  updatedAt: {
    type: Sequelize.DATE
  },

}, {

  defaultScope: {
    order: [['createdAt', 'ASC']]
  }

});