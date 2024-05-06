// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Cards() {
//    const [userdata, setUserData] = useState([]);

//    useEffect(() => {
//       const fetchData = async () => {
//          try {
//             const response = await axios.get("http://localhost:3030/groupe/product/get");
//             setUserData(response.data);
//          } catch (error) {
//             console.error("Error fetching data:", error);
//          }
//       };

//       fetchData(); 
//    }, []); 

//   //  console.log(userdata); // You can log the userdata here if needed

//    return (
//       <>
//          {/* Check if userdata.datas exists before mapping */}
//          {userdata && userdata.datas && userdata.datas.map((item, index) => (
//             <div key={index} className="card">
//               <div className="image">
//                 <img src={item.image} alt="" />
//               </div>
//               <h1>{item.productname}</h1>
//               <div className="description">
//               <p>{item.descliption}<span>{item.price}</span>Rwf</p>
//               <a href="">Buy now...</a>
//               </div>
//             </div>
//          ))}
//       </>
//    );
// }

// export default Cards;

import React, { useState, useEffect } from 'react';
import { Card as AntCard } from 'antd';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import axios from "axios";

const idParams=window.location.href.split("?id=")[1]

const { Meta } = AntCard;

function CustomCard() {
  const [viewinfo, setViewinf] = useState(false);
  const [productdata, setProductData] = useState([]);

  const handleview = () => {
    setViewinf(true);
  }

  const handleclose = () => {
    setViewinf(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3030/api/v1/product/get");
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(productdata); // You can log the userdata here if needed

  return (
    <>
      {productdata && productdata.data && productdata.data.map((product, index) => (
        <AntCard
          key={index}
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1oUc4hyMH-UZu-ZXFlVGUsj9VtVJsAwD0BQ&s" />}
        >
          <Meta title={product.name} description={product.definition} />

          <div className="butt">
          <button><a href={`/single?id=${product._id}`}>buy</a></button>
            <button onClick={handleview}>View</button>
          </div>
        </AntCard>
      ))}

      {viewinfo && (
        <div className="viewinform">
          <div className="close">
            <CloseOutlinedIcon onClick={handleclose} />
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1oUc4hyMH-UZu-ZXFlVGUsj9VtVJsAwD0BQ&s" alt="" />
          <h1>Europe Street beat</h1>
          <h2>Price:200Kg</h2>
          <p>www.instagram.com</p>
          <span>It seems like you're encountering a dependency resolution error while trying to install the react-swipeable-views package. The error message indicates that there's a conflict between the versions of React required by your project and the react-swipeable-views package.</span>
          <span>It seems you have a naming conflict in your code. You're importing Card from Ant Design, and then you're defining a component named Card. This can lead to unexpected behavior and errors. To avoid this, you can either rename your custom component or alias the imported Card from Ant Design. Here's how you can alias the import:</span>
        </div>
      )}
    </>
  );
}

export default CustomCard;
