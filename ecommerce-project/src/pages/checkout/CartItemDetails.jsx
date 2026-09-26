import axios from 'axios'
import { useState } from 'react'

export function CartItemDetails({ cartItem, loadCart }) {

  const [updating, setUpdating] = useState(false);

  const deleteCartItem = async () => {
    // await axios.delete(`api/cart-items/${cartItem.productId}`);
    await axios.delete(`https://ecommerce-backend-14uf.onrender.com/api/cart-items/${cartItem.productId}`);

    await loadCart()
  }


  // const newQuantity = async () => {
  //   setUpdating(!updating);

  //    () => {
  //     if (updating) {
  //       await axios.put(`/api/cart-items/${cartItem.productId}`, {
  //         quantity: Number(quantity)
  //       })
  //     }
  //     loadCart()

  //     setUpdating(false)
  //   }

  // }

  const newQuantity = async () => {
    if (updating) {
      // await axios.put(`/api/cart-items/${cartItem.productId}`, {
      //   quantity: Number(quantity)
      // });

      await axios.put(`https://ecommerce-backend-14uf.onrender.com/api/cart-items/${cartItem.productId}`, {
  quantity: Number(quantity)
});

      await loadCart();
    }

    setUpdating(!updating);
  };

  const [quantity, setQuantity] = useState(cartItem.quantity)


  return (
    <>
      <img className="product-image"
        src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">
          {cartItem.product.name}
        </div>
        <div className="product-price">
          ${((cartItem.product.priceCents) / 100).toFixed(2)}
        </div>
        <div className="product-quantity">
          <span> {updating ? (
            <>
              Quantity: <input type="text" className="new-quantity" value={quantity} onChange={(event) => {
                setQuantity(event.target.value)
              }}
              onKeyDown={(event) => {
                if(event.key === 'Enter'){
                  newQuantity()
                }

                if(event.key === 'Escape'){
                  setQuantity(cartItem.quantity)

                  setUpdating(false)
                }
              }} 
               />
            </>)
            : (
              <span className="quantity-label"> Quantity: {cartItem.quantity}</span>
            )}

          </span>
          <span className="update-quantity-link link-primary" onClick={newQuantity}>
            Update
          </span>
          <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>
            Delete
          </span>
        </div>
      </div>
    </>

  )
}
