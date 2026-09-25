import Sequelize from 'sequelize';

import { sequelize } from './index.js';

export const CartItem = sequelize.define('CartItem', {

  productId: {
    type: Sequelize.UUID,
    allowNull: false,

    references: {
      model: 'Products',
      key: 'id'
    }
  },

  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  deliveryOptionId: {
    type: Sequelize.STRING,
    allowNull: false,

    references: {
      model: 'DeliveryOptions',
      key: 'id'
    }
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
