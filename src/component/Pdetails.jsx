import React,{ useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { add } from '../counter/counterSlice';
const Pdetails = () => {
  const {id} = useParams();
  // const { data: product, status } = useSelector(state => state.product);
  const dispatch = useDispatch();
  // console.log(id)

//   const handleAdd = (product) => {
//     dispatch(add(product));
// };
const handleAdd = () => {
  const productWithImage = { ...product, image: product.image }; // Ensure product object includes image property
  dispatch(add(productWithImage)); // Dispatch the add action with the updated product object
};

  const [product, setproduct] = useState([])
  useEffect(() => {
    const fetchproducts =async ()=>{
      let result = await fetch(`https://fakestoreapi.com/products/${id}`);
      let data = await result.json();
      console.log(data);
      setproduct(data)
    }
    fetchproducts();
  }, [id]);
  return (
    <div style={{marginTop: "6rem"}}>
   
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={product.image} alt={product.id} style={{height:"450px"}} />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold">{product.title}</h1>
                    <hr />
                    <h2 className="my-4">₹{product.price}</h2>
                    <p className="lead">{product.desc}</p>
                    <button onClick={() => handleAdd(product)} className="btn btn-outline-primary my-2">Add to Cart</button>
                    <Link to='/Product-shop/cart'><button className="btn btn-outline-primary w-100 my-2">Go to Cart</button></Link>
                </div>
            </div>
        </div>
    
    </div>
  );
}

export default Pdetails;
