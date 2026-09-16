import Sequelize from 'sequelize';

import { sequelize } from './index.js';

export const DeliveryOption = sequelize.define('DeliveryOption', {

  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },

  deliveryDays: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  priceCents: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  createdAt: {
    type: Sequelize.DATE,
  },

  updatedAt: {
    type: Sequelize.DATE,
  },

}, {

  defaultScope: {
    order: [['createdAt', 'ASC']]
  }

});