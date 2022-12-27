function shoppingCart(item, picture, amount){
    const itemContainer = document.querySelector('.itemContainer');
    const imageID = document.createElement('h3');
    const image = new Image();
    image.setAttribute('class','img');
    const itemName = document.createElement('h2');
    const price = document.createElement('h2');
    const itemDetails = document.createElement('p');
    itemDetails.setAttribute('class', 'container');
    const cartButton = document.createElement('button');   
    cartButton.setAttribute('class', 'btn'); 
    cartButton.innerHTML = "ADD TO CART"; 
        
   
    image.src=picture;
    itemName.innerHTML = item;
    price.innerHTML = "$"+amount;
        
    itemContainer.setAttribute('class','itemContainer');
    itemDetails.appendChild(itemName);
    itemDetails.appendChild(price);
    itemDetails.appendChild(cartButton);
    itemContainer.appendChild(image);
    itemContainer.appendChild(itemDetails);   
    
}

shoppingCart(
    "Check Print Shirt", 
    "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
    "110"
);    
      
 
   
        

   

