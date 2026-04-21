import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <h6 className="mb-0">{item.name}</h6>
        <small className="text-muted">${item.price} x {item.quantity}</small>
      </div>
      <div className="d-flex align-items-center">
        <button 
          className="btn btn-sm btn-secondary me-2"
          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
        >
          -
        </button>
        <span className="me-2">{item.quantity}</span>
        <button 
          className="btn btn-sm btn-secondary me-2"
          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
        >
          +
        </button>
        <button 
          className="btn btn-sm btn-danger"
          onClick={() => dispatch(removeItem(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;