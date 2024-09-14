//Inventory Management System

// Task 1- Create an Inventory Array of Product Objects
const inventory= [
    { name: 'Gaming PC', price: 1200, quantity: 10, lowStockLevel: 3 },
    { name: 'Valorant', price: 50, quantity: 5, lowStockLevel: 2 },
    { name: 'GTA VI', price: 500, quantity: 7, lowStockLevel: 1 },
    { name: 'Caniac Combo', price: 16, quantity: 15, lowStockLevel: 5 },
    { name: 'Stardew Valley', price: 250, quantity: 3, lowStockLevel: 1 }
];

// Task 2- Create a Function to Display Product Details
function displayProductDetails(products) {
    for(let i=0;i<products.length;i++){ 
        if (products[i].lowStockLevel == products[i].quantity) {
            console.log(`Product: ${products[i].name}, Price: ${products[i].price}, Quantity: ${products[i].quantity}, Status: Low Stock `);
        }
        else {
            console.log(`Product: ${products[i].name}, Price: ${products[i].price}, Quantity: ${products[i].quantity}, Status: In Stock `);
        }   
    }
}
displayProductDetails(inventory);
// Outputs the product’s name, price, quantity in stock, and stock status

// Task 3- Create a Function to Update Product Stock After Sales
function updateStock (products, unitsSold) {
products.quantity -= unitsSold;
if (products.lowStockLevel == products.quantity){
    console.log (`${products.name} is now Low Stock`);
}
else if (products.quantity == 0) {
    console.log (`${products.name} is now Out of Stock`);
}
};
updateStock(inventory[0],7);
// Outputs "Gaming PC is now Low Stock as the quanity changed 3"
