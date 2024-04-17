
import React from 'react';
import '../sass/main.scss'
import Navbar from '../component/header';
import { Image } from 'antd';

function Singleproduct() {
      return (
        <>
          <Navbar/>
           <div className="single-production">
              <div className="image-contain">
                   <div className="image">
                   <Image
                      width={500}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1oUc4hyMH-UZu-ZXFlVGUsj9VtVJsAwD0BQ&s"
                   />
                       <div className="calculator">
                         <button>-</button>
                            <h1>0</h1>
                         <button>+</button>
                       </div>
                   </div>
                   <div className="description">
                     <h1>The name of the product</h1>
                      <h2>title of product</h2>
                       <h3>Price : <p>200</p>Rwf</h3>
                      <p>Quotinty available: <span>599999</span>Kg</p> 
                       <span>It better to buy this project because it support your body</span>
                       <h5 className='cost'>Totol cost:<h6>2002</h6>Rwf</h5>
                   </div>
              </div>
              <h1>Form to fill to buy product</h1>
           </div>
        </>
      )
};

export default Singleproduct;
