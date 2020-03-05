var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

/*function addToCart(itemName) {
var itemPrice=Math.floor(Math.random()*100)
cart.push({itemName:itemPrice});
  console.log(`${itemName} has been added to your cart.`)
  return cart;
}*/
function addToCart(itemName) {
var itemPrice=Math.floor(Math.random()*100)
cart.push({itemName: itemName, itemPrice: itemPrice});
  return(`${itemName} has been added to your cart.`);
}


/*function viewCart() {
  if (!cart.length) {//if (cart.length === 0)
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
} else {
      var printString="In your cart, you have ";
      for(var i = 0; i < cart.length - 1; i++) {
      printString += `${cart[i].itemName} at ${cart[i].itemPrice},`;
    }
    return printString + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
  }
}*/
function viewCart() {
if (!cart.length) {//if (cart.length === 0)
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var threeItemPrint = "In your cart, you have "
    for(var i = 0; i < cart.length - 1; i++) {
      threeItemPrint += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    return threeItemPrint + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  }
}

function total() {
  var totalPrice = 0;
  for(var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice;
  }
  return totalPrice;
}
//////////////////////////
function removeFromCart(itemName)
{
  for (var i=0;i<cart.length;i++)
  {
      if (itemName === cart[i].itemName)
      {
      cart.splice(i, 1); //removes 1 item at index i
        return cart;
      }
  }
  return "That item is not in your cart."// just return that the item is not in the cart - not condition needed!
}
/////////////////////////////
  function placeOrder(cardNumber) {
        if(cardNumber) {
        var a = total()
        cart=[];
        return(`Your total cost is $${a}, which will be charged to the card ${cardNumber}.`)
      }
      return "Sorry, we don't have a credit card on file for you."
      }
