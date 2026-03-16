const MAX_ITEMS: number = 5;
const itemPrice: number = 4.99;
let customerName: string = "Alex";
let cartTotal: number = 0;
let itemCount: number = 0;

while (itemCount < MAX_ITEMS) {

    cartTotal += itemPrice;
    itemCount += 1;

    console.log(`${customerName} added an item costing $${itemPrice}`);
    console.log(`Items in cart: ${itemCount} | Cart total: $${cartTotal.toFixed(2)}`);
}

const TAX_RATE: number = 0.08;
const tax: number = cartTotal * TAX_RATE;
const finalTotal: number = cartTotal + tax;

if (finalTotal > 20) {
    console.log(`${customerName} qualifies for free shipping!`);
} else {
    console.log(`${customerName} does not qualify for free shipping.`);
}

// .toFixed(2) is used to format the number to 2 decimal places for currency representation
console.log(`Subtotal: $${cartTotal.toFixed(2)}`);
console.log(`Tax (8%): $${tax.toFixed(2)}`);
console.log(`Final total: $${finalTotal.toFixed(2)}`);