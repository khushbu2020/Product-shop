import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../counter/counterSlice';

const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <h5 className=' text-center' style={{ marginTop: "6rem" }}>Cart</h5>
      {products.length === 0 ? (
        <p className=' text-center'>Your cart is empty.</p>
      ) : (
        <table className='table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, idx) => (
              <tr key={idx}>
                <td><img src={product.image} alt={product.id} style={{ width: '50px', height: 'auto' }} /></td>
                <td>{product.title}</td>
                <td>{product.price}₹</td>
                <td>
                  <button className='btn btn-outline-secondary' onClick={() => handleRemove(product.id)}><i className="fa-solid fa-trash-can"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cart;
