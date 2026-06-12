import ProductCard from "../components/ProductCard";

import nikeImage from "../assets/nike.jpg"
import trendsImage from "../assets/trends.jpg"
import airImage from "../assets/air.jpg"
import jordanImage from "../assets/jordan.jpg"
import fastrackImage from "../assets/fastrack.jpg"
import rolexImage from "../assets/rolex.jpg"
function Home() {
    return(
        <>
        <div>
            <h2>Welcome to My E-Commerce Web</h2>
            <p>Explore amazing products here</p>
         </div>    
 
        <div className="product-grid"> 
            <ProductCard
              image={nikeImage}
              name="nike air"
              price="$88"
            />

            <ProductCard
              image={trendsImage}
              name="trends comfort"
              price="$76"
             /> 

             <ProductCard
               image={airImage}
               name="air one"
               price="$99"
           
             />  

             <ProductCard
               image={jordanImage}
               name="jordan"
               price="$86"
             />  

             <ProductCard
               image={fastrackImage}
               name="fastrack black"
               price="$166"
             />  

             <ProductCard
               image={rolexImage}
               name="rolex moon"
               price="$899"
             />  

             
            </div>
                

  

        

        </>
        
        
        

        
        
        

    ); 
}

export default Home;