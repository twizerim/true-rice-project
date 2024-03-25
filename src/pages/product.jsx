

import Cards from "../component/cards"
import '../sass/main.scss'
import Header from "../component/header"


const Productpage = () =>{
    return (
        <>
        <Header/>
        <div className="product-container">
          <Cards/>
        </div>
         
        </>
    )
}
export default Productpage