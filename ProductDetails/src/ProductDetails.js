import { Component, useEffect, useState } from "react";
import './products.css';

const ProductDetails = ()=>{
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
                <div className="productDetails">
                    <img src = {element.image} height="150px"/>
                    <div>
                        <p>
                            <h3>{element.name}</h3>
                            <h4>{element.description}</h4>
                        </p>
                        <p>${element.price}</p>
                    </div>
                </div>                
               
                 )}
            </div>

        );
    
}
export default ProductDetails;