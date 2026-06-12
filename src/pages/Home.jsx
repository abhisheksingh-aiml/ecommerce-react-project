import ProductCard from "../components/ProductCard";

import nikeImage from "../assets/nike.jpg"
import trendsImage from "../assets/trends.jpg"

function Home() {
    return(
        <>
        <div>
            <h2>Welcome to My E-Commerce Web</h2>
            <p>Explore amazing products here</p>
         </div>    

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

        

        </>
        
        
        

        
        
        

    );
}

export default Home;