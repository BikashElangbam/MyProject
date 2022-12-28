function shoppingCart(id, picture, item, amount){

    const itemContainer = document.querySelector('.itemContainer');
    itemContainer.setAttribute('class','itemContainer');
    const itemID = document.createElement('h3');
    const image = new Image();
    image.setAttribute('class','img');
    const itemName = document.createElement('h3');
    const price = document.createElement('h3');
    const itemDetails = document.createElement('p');
    itemDetails.setAttribute('class', 'container');
    const cartButton = document.createElement('button');   
    cartButton.setAttribute('class', 'btn'); 
    cartButton.innerHTML = "ADD TO CART"; 
        
    itemID.innerHTML = id;
    image.src=picture;
    itemName.innerHTML = item;
    price.innerHTML = "$"+amount;
        
    itemDetails.appendChild(image);
    itemDetails.appendChild(itemName);
    itemDetails.appendChild(price);
    itemDetails.appendChild(cartButton);
    itemContainer.appendChild(itemDetails);   
}
   
let itemID;
let itemImage;
let itemName;
let itemPrice;
import data from './data.json' assert {type:'json'}; 
data.forEach((value) => {
    itemID = value.id;
    itemImage = value.imgUrl;
    itemName = value.name;
    itemPrice = value.price;
    shoppingCart(itemID,itemImage,itemName,itemPrice);
});


        

   

