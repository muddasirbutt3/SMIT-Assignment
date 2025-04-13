const name = document.getElementById("name");
const amount = document.getElementById("price");
const total = document.getElementById("total");
const expense = document.getElementById("expense");
let totalArr = [];
let totalSum = 0;

function formalName(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    
}


function addExpense() {
    let nameValue = name.value.trim();
    let amountValue = parseFloat(amount.value.trim());
    if (nameValue === "" || isNaN(amountValue) || amountValue <= 0) {
        alert("Please enter valid name and amount.");
        return;
    }
    nameValue = formalName(nameValue);
    expense.innerHTML += `<div class="items">
    <span id="name22">${nameValue}</span><span id="price22">${amountValue}</span>
    <div class="btns">
    <button id="edit" onclick="edit(this)"><i class="fa-solid fa-pen-to-square"></i></button>
    <button id="del" onclick="this.parentNode.parentNode.remove()"><i class="fa-solid fa-trash-can"></i></button>
    </div>
    </div>`;
    totalArr.push(amountValue);
    totalSum = totalArr.reduce((acc, curr) => acc + curr);
    total.innerHTML = `$${totalSum}`;
    name.value = "";
    amount.value = "";
    
}
function edit(e) {
    let parent = e.parentElement.parentElement
    let nameValue = parent.children[0].textContent.trim();
    let amountValue = parent.children[1].textContent.trim();

    totalArr = totalArr.filter((item) => {
        return item !== parseFloat(amountValue);
    });
    totalSum -= parseFloat(amountValue);
    total.innerHTML = `$${totalSum}`;
    name.value = nameValue
    amount.value = amountValue
    parent.remove();  
}
function clrAll() {
    if (expense.innerHTML == "<h4>Expenses</h4>") {
        alert("No expenses to clear!");
        return;
    }
    expense.innerHTML = "<h4>Expenses</h4>";
    total.innerHTML = "$0";
    totalArr = [];
    name.value = "";
    amount.value = "";
    
}