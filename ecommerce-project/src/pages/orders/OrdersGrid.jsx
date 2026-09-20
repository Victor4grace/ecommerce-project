import dayjs from 'dayjs'
import {Fragment} from 'react'
import buy from '../../assets/images/icons/buy-again.png'
import { Link } from 'react-router'
import { OrderHeader } from './OrderHeader'
import { OrderDetailsGrid } from './OrderInnerGrid'

export function OrdersGrid({orders}) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">

            <OrderHeader order= {order}/>

            <OrderDetailsGrid order= {order} />

          </div>
        )
      })}
    </div>
  )
}