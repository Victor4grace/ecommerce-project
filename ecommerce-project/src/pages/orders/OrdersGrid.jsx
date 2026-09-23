import dayjs from 'dayjs'
import {Fragment} from 'react'
import buy from '../../assets/images/icons/buy-again.png'
import { Link } from 'react-router'
import { OrderHeader } from './OrderHeader'
import { OrderDetailsGrid } from './OrderDetailsGrid'

export function OrdersGrid({orders, loadCart}) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">

            <OrderHeader order= {order}/>

            <OrderDetailsGrid order= {order} loadCart={loadCart} />

          </div>
        )
      })}
    </div>
  )
}