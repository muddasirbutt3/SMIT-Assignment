let name = prompt("Enter your name");
let pro1 = prompt("Enter first Product");
let price1 = +prompt("Enter the price of " + pro1);
let pro2 = prompt("Enter second Product");
let price2 = +prompt("Enter the price of " + pro2);
let pro3 = prompt("Enter third Product");
let price3 = +prompt("Enter the price of " + pro3);
let pro4 = prompt("Enter fourth Product");
let price4 = +prompt("Enter the price of " + pro4);
let pro5 = prompt("Enter fifth Product");
let price5 = +prompt("Enter the price of " + pro5);
let total1 = price1 + price2 + price3 + price4 + price5;
let discount;
if (total1 >= 5000) {
  discount = total1 * 0.5;
} else if (total1 >= 4000) {
  discount = total1 * 0.4;
} else if (total1 >= 3000) {
  discount = total1 * 0.3;
} else if (total1 >= 2000) {
  discount = total1 * 0.2;
} else if (total1 < 2000) {
  discount = total1 * 0.1;
}
let total = total1 - discount;

document.write(`<table border="1">
        <tr>
        <th>Customer Name</th>
        <th>${name}</th>
    </tr>
    <tr>
        <th>Products</th>
        <th>Price</th>
    </tr>
    <tr>
        <td>${pro1}</td>
        <td>${price1}</td>
    </tr>
    <tr>
        <td>${pro2}</td>
        <td>${price2}</td>
    </tr>
    <tr>
        <td>${pro3}</td>
        <td>${price3}</td>
    </tr>
    <tr>
        <td>${pro4}</td>
        <td>${price4}</td>
    </tr>
    <tr>
        <td>${pro5}</td>
        <td>${price5}</td>
    </tr>
    <tr>
        <td>Total Without Discount</td>
        <td>${total1}</td>
    </tr>
    <tr>
        <td>Dicount</td>
        <td>${discount}</td>
    </tr>
    <tr>
        <td>Total With Discount</td>
        <td>${total}</td>
    </tr>
</table>`);
