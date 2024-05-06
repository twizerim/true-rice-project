import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../sass/main.scss';
import Navbar from '../component/header';
import { Image } from 'antd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import HouseSidingSharpIcon from '@mui/icons-material/HouseSidingSharp';
import axios from 'axios';

function Singleproduct() {
  const [count, setCount] = useState(0);
  const [productdata,setProductData]=useState("")


  useEffect(() => {

    const idParams = window.location.href.split("?id=")[1];
    const isValidObjectId = /^[0-9a-fA-F]{24}$/.test(idParams); 

    if (!isValidObjectId) {
      console.error('Invalid ObjectId');

      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/api/v1/product/get/${idParams}`);
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(productdata); 

  let qontitys = productdata?.data?.quontity; 
  let prices = productdata?.data?.price;

  const [qontity,setQuontity] = useState(qontitys)
  let totalPrice = prices * count;

  if (!productdata) {
    return <div>Loading...</div>;
  }

  const handleplus = () => {
    if (qontity > 0) {
      setCount(count + 1);
      setQuontity(qontity - 1); 
    }
  };

  const handleminus = () => {
    if (count > 0) {
      setCount(count - 1);
      setQuontity(qontity + 1); 
    }
  
  };


  return (
    <>
      <Navbar />
      <div className="single-production">
        <div className="image-contain">
          <div className="image">
            <Image
              width="50%"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1oUc4hyMH-UZu-ZXFlVGUsj9VtVJsAwD0BQ&s"
            />
            <div className="calculator">
              <button onClick={handleminus}>-</button>
              <h1>{count} Kg</h1>
              <button onClick={handleplus}>+</button>
            </div>
          </div>
          <div className="description">
            <h1>TITLE: {productdata.data.title}</h1>
            <h2>NAME: {productdata.data.name}</h2>
            <h3>Price : {prices} Rwf</h3>
            <p>Quantity available: <span>{qontitys}</span> Kg</p>
            <span>{productdata.data.definition}</span>
            <h5 className="cost">Total cost: <span>{totalPrice} Rwf</span></h5>
          </div>
        </div>
         <div className="oder-now">
            <form action="">
               <div className="division">
                <label htmlFor="">Full name:
                   <input type="text" />
                </label>
               </div>
               <div className="division">
                <label htmlFor="">Phone number:
                   <input type="text" />
                </label>
               </div>
               <div className="division">
                <label htmlFor="">Location where you want to delive product:
                   <input type="text" />
                </label>
               </div>
               <div className="division">
                <label htmlFor="">Quantitiea you need:
                   <input type="text" value={count} />
                </label>
               </div>
               <div className="division">
                <label htmlFor="">Const:
                   <input type="text" value={totalPrice}/>
                </label>
               </div>
               <div className="division">
                <label htmlFor="">Other information:
                   <textarea name="" id="" cols="" rows="3"></textarea>
                </label>
               </div>
               <div className="buyy">
                <button type='submit'>Oder now!</button>
               </div>
            </form>
         </div>
      </div>
      <div className="parthto">
           <div className="hone">
           <HouseSidingSharpIcon/>
           <Link to="/" className="link">Home</Link>
           </div>
           <div className="hone">
            <ShoppingCartIcon/>
           <Link to="/oder" className="link">My Oder</Link>
           </div>
           <div className="hone">
            <ManageAccountsIcon/>
           <Link to="/product" className="link">My Account</Link>
           </div>
           <div className="hone">
            <ShoppingBasketIcon/>
           <Link to="/product" className="link">Other product</Link>
           </div>
      </div>
    </>
  );
}

export default Singleproduct;
