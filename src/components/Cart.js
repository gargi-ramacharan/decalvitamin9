import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import CartItem from './CartItem';

function Cart() {
  const dispatch = useDispatch();
  const { items, totalQuantity } = useSelector((state) => state.cart);

  // Calculate total price: price * quantity for each item
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <h5 className="card-title">Shopping Cart</h5>
          <p className="text-muted">Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <h5 className="mb-0">Cart ({totalQuantity} items)</h5>
      </div>
      <div className="list-group list-group-flush">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <strong>Total Price:</strong>
          <span className="h5 mb-0">${totalPrice.toFixed(2)}</span>
        </div>
        <button 
          className="btn btn-danger w-100"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;