

import CustomCard from "../component/cards"
import '../sass/main.scss'
import Header from "../component/header"
import Footer from "../component/footer"


const Productpage = () =>{
    return (
        <>
        <Header/>
        <h1>This is the product availabe to buy</h1>
        <div className="product-container">
          <CustomCard/>
          <CustomCard/>
          <CustomCard/>
          <CustomCard/>
          <CustomCard/>
          <CustomCard/>
          <CustomCard/>
          <CustomCard/>
        </div>
         <Footer/>
        </>
    )
}
export default Productpage