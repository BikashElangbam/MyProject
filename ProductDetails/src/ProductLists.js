
import ProductDetails from "./ProductDetails";
import { useEffect, useState } from "react";

const ProductLists = () =>{


    const [product, setProduct] = useState([])
    
    useEffect(() => {
        getAPI("./data.json")
    }, []);

    const getAPI = (data) => {
        console.log(data)
        fetch(data, {
            headers:
            {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data);
            })
    }
    
        return(
            
            <div>
                 {product.map((element, i)=>
                <div className="productDetails" key = {element.id}>
                    <ProductDetails key = {element.id} image ={element.image} name = {element.name} description ={element.description} price = {element.price}/>

                </div>                
               
                 )}
            </div>

        );

}

export default ProductLists;