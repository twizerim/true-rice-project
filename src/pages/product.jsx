

import Cards from "../component/cards"
import '../sass/main.scss'
import Header from "../component/header"
import Footer from "../component/footer"


const Productpage = () =>{
    return (
        <>
        <Header/>
        <div className="product-container">
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
         <Footer/>
        </>
    )
}
export default Productpage