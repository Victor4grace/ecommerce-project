
import { SelectedDeliveryOption } from './DeliveryDate';


export function OrderSummary({deliveryOptions, cart , loadCart }) {
  return (
    <div className="order-summary">

      <SelectedDeliveryOption deliveryOptions={deliveryOptions} cart = {cart} loadCart= { loadCart } />

    </div>
  )
}