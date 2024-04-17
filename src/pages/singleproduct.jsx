import React, { useState } from 'react';
import '../sass/main.scss';
import Navbar from '../component/header';
import { Image } from 'antd';

function Singleproduct() {
  const [count, setCount] = useState(0);
  let price = 200;
  let totalPrice = price * count;

  const handleplus = () => {
    setCount(count + 1);
  };

  const handleminus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Navbar />
      <div className="single-production">
        <div className="image-contain">
          <div className="image">
            <Image
              width={500}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1oUc4hyMH-UZu-ZXFlVGUsj9VtVJsAwD0BQ&s"
            />
            <div className="calculator">
              <button onClick={handleminus}>-</button>
              <h1>{count} Kg</h1>
              <button onClick={handleplus}>+</button>
            </div>
          </div>
          <div className="description">
            <h1>The name of the product</h1>
            <h2>title of product</h2>
            <h3>Price : {price} Rwf</h3>
            <p>Quantity available: <span>599999</span> Kg</p>
            <span>It's better to buy this product because it supports your body</span>
            <h5 className="cost">Total cost: <span>{totalPrice} Rwf</span></h5>
          </div>
        </div>
         <div className="oder-now">
           <h1>Oder now , complete here</h1>
            <form action="">
               <div className="division">
                <label htmlFor="">Full name
                   <input type="text" />
                </label>
               </div>
               <div className="division">
                <label htmlFor="">Phone number
                   <input type="text" />
                </label>
               </div>
               <div className="division">
                <label htmlFor="">Location where you want to delive product
                   <input type="text" />
                </label>
               </div>
               <div className="division">
                <label htmlFor="">Quantitiea you need
                   <input type="text" value={count} />
                </label>
               </div>
               <div className="division">
                <label htmlFor="">Const
                   <input type="text" value={totalPrice}/>
                </label>
               </div>
               <div className="division">
                <label htmlFor="">Other information
                   <textarea name="" id="" cols="" rows="3"></textarea>
                </label>
               </div>
               <div className="buyy">
                <button>Oder now!</button>
               </div>
            </form>
         </div>
      </div>
    </>
  );
}

export default Singleproduct;
