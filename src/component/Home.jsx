import React from 'react';
import Products from './Products';

const Home = () => {
  return (
    <div>
       <h2 className=' text-center ' style={{marginTop: "6rem"}}>Welcome to the Redux toolkit store</h2>
       <h5 className=' text-center mt-3'>Products</h5> 
       <section>
        <Products/>
       </section>
    </div>
  );
}

export default Home;
