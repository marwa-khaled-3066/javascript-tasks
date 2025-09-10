// Product objects:
const product_1 = {
    name: "Charger",
    price: 30,
    inStock: true,
    category: "electronics"
};
const product_2 = {
    name: "Apples",
    price: 90,
    inStock: true,
    category: "food"
};
const product_3 = {
    name: "Blouse" ,
    price: 200,
    inStock: false,
    category: "clothes"
};

// Array:
let cart = [product_1, product_2, product_3];

// Arithmetic:
var totalPrice = product_1.price + product_2.price + product_3.price;
document.write("Total price: " + totalPrice + "<br><br>");

// Discount:
if (totalPrice > 100){
    totalPrice -= totalPrice*0.1;
    document.write("Price is greater than 100, so we have applied a 10% discount" + "<br>");
    document.write("New price after discount: " + totalPrice + "<br><br>");
};

// Checking stock:
function stockCheck (item){
    if (item.inStock){
        document.write(item.name + " is in stock!" + "<br>");
    }
    else{
        document.write(item.name + " is NOT in stock!" + "<br>");
    };
};
cart.forEach(stockCheck);
document.write("<br>");

// Checking stock and price:
function stockPriceCheck (item){
    if (item.inStock && item.price <50 ){
        document.write(item.name + " is in stock!" + "<br>");
        document.write("The price is " + item.price + "<br>");
    };
    if (item.inStock && item.price <25 ){
        document.write(item.name + " is in stock!" + "<br>");
        document.write("The price is " + item.price + "<br>");
    };
};
cart.forEach(stockPriceCheck);
document.write("<br>");

// Budget category using for loop and array length
let len = cart.length;
for (let i=0; i < len; i++){
    item = cart[i];
    if(item.price<50){
        document.write("Low budget <br>");
    }
    else{
        if (item.price > 50 && item.price < 100){
            document.write("Medium budget <br>");
        }
        else{
            document.write("High budget <br>");
        };
    };
    document.write("<br>");
};

// Switch case
switch(cart) {
  case "food":
    document.write("Consume before expiry! <br>");
    break;
  case "electronics":
    document.write("Take care of warranty!! <br>");
    break;
  case "clothes":
    document.write("Check size before buying! <br>");
    break;
  default:
    document.write("Unknown category <br>");
};