import React, { useEffect, useState } from 'react';
import '../user.css'
import { add } from '../counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../counter/productSlice';
import { STATUES } from '../counter/productSlice';
import { Link } from 'react-router-dom';

const Products = () => {
    const dispatch = useDispatch();
    const { data: product, status } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if (status === STATUES.LOADING) {
        return <h2 className='ms-3'>Loading...</h2>;
    }

    if (status === STATUES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }

    return (
        <div>
            <main>
                {product.map((product, idx) => (
                    <section key={idx} className="product">
                        <img
                            src={product.image}
                            alt="Fjallraven - Foldsack No. 1 Backpack"
                        />
                        <div className="info">
                            <h3>{product.title}</h3>
                            <p>{product.category}</p>
                            <div className='d-flex justify-content-between m-0 p-0'>
                                <span className="price">Price : {product.price}₹</span>
                                <p className="price">Rating : {product.rating.rate}★</p>
                            </div>
                            <button className="btn btn-outline-danger mx-3 my-2" onClick={() => handleAdd(product)}> ADD Product</button>
                            <Link to={`/product/${product.id}`}><button className="btn btn-outline-danger mx-3 my-2"> More details</button></Link>
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
};

export default Products;
