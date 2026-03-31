// maximum number of items allowed in the cart
const MAX_ITEMS: number = 5;

// price of each item
const itemPrice: number = 4.99;

// name of the customer
let customerName: string = "Alex";

// running total of the cart, starts at 0
let cartTotal: number = 0;

// number of items in the cart, starts at 0
let itemCount: number = 0;

// keep looping until the cart reaches the max number of items
while (itemCount < MAX_ITEMS) {

    // add the item price to the cart total
    cartTotal += itemPrice;

    // add one to the item count
    itemCount += 1;

    // print what the customer added and the item price
    console.log(`${customerName} added an item costing $${itemPrice}`);

    // print the current number of items and the running cart total
    console.log(`Items in cart: ${itemCount} | Cart total: $${cartTotal.toFixed(2)}`);
}

// tax rate of 8%
const TAX_RATE: number = 0.08;

// calculate the tax amount
const tax: number = cartTotal * TAX_RATE;

// calculate the final total by adding tax to the cart total
const finalTotal: number = cartTotal + tax;

// check if the customer qualifies for free shipping
if (finalTotal > 20) {
    console.log(`${customerName} qualifies for free shipping!`);
} else {
    console.log(`${customerName} does not qualify for free shipping.`);
}

// .toFixed(2) is used to format the number to 2 decimal places for currency representation
console.log(`Subtotal: $${cartTotal.toFixed(2)}`);
console.log(`Tax (8%): $${tax.toFixed(2)}`);
console.log(`Final total: $${finalTotal.toFixed(2)}`);