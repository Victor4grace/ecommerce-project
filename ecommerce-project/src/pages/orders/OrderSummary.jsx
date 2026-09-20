
import { SelectedDeliveryOption } from './DeliveryDate';


export function OrderSummary({deliveryOptions, cart }) {
  return (
    <div className="order-summary">

      <SelectedDeliveryOption deliveryOptions={deliveryOptions} cart = {cart}  />

    </div>
  )
}