import axios from 'axios';
import dayjs from 'dayjs'
import { useState, useEffect, Fragment } from 'react'
import { Header } from '../../component/Header'
import './OrdersPage.css'
import { OrdersGrid } from './OrdersGrid';

export function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([])

 

useEffect(() => {
  const fetchOrdersData = async () => {
    const response = await axios.get(
      'https://ecommerce-backend-14uf.onrender.com/api/orders?expand=products'
    )

    // console.log('ORDERS RESPONSE:', response.data)
    // console.log('IS ARRAY:', Array.isArray(response.data))

    setOrders(response.data)
  }

  fetchOrdersData()
}, [])



  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div> 

        <OrdersGrid orders={orders} cart={cart} loadCart={loadCart} />

      </div>
    </>
  )
}