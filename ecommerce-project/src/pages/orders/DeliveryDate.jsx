
import { DeliveryOptions } from './DeliveryOptions';
import { CartItemDetails } from '../checkout/CartItemDetails';
import { OrdinaryDeliveryDate } from './OrdinaryDeliveryDate';


export function SelectedDeliveryOption({deliveryOptions, cart , selectedDeliveryOption , loadCart}) {
  return (
    <>
    
     { deliveryOptions.length > 0 && cart.map((cartItem) => {

        const selectedDeliveryOption = deliveryOptions
          .find((deliveryOption) => {
            return deliveryOption.id === cartItem.deliveryOptionId;
          })

        return (
          <div key={cartItem.productId} className="cart-item-container">
            <OrdinaryDeliveryDate selectedDeliveryOption={selectedDeliveryOption} />
            <div className="cart-item-details-grid">
              <CartItemDetails cartItem={cartItem}/>

              <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart= { loadCart } />

              
            </div>
          </div>
        )
      })
    }
    </>
  )
}