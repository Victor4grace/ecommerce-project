import{ Link } from 'react-router'
import lock from '../../assets/images/icons/checkout-lock-icon.png'


export function CheckoutHeader ({ cart }){
  let cartQuantity = 0

  cart.forEach((cartItem) =>{
    cartQuantity +=cartItem.quantity
  })

  return(
     <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to ="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<Link className="return-to-home-link"
              to="/">{cartQuantity} items</Link>) 
          </div>

          <div className="checkout-header-right-section">
            <img src={lock} />
          </div>
        </div>
      </div>
  )
}