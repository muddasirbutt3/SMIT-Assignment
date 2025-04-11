const input = document.getElementById('input')
const ul = document.getElementById('ul')


function clrAll(){
    ul.innerHTML = ''
}

function Add() {
    if (input.value == '')  return
    ul.innerHTML += `<li>
    ${input.value}
    <span>
        <button class="btn btn-warning" onclick="editItem(this)">Edit</button>
        <button class="btn btn-danger" onclick="this.parentNode.parentNode.remove()">Delete</button>
    </span>
    </li>`
    input.value = ''
}

function editItem(e){
    
    let newInput = prompt("Enter new value.",e.parentNode.parentNode.firstChild.textContent.trim())
    console.log(newInput)
    if (newInput == '' || newInput == null) {
        e.parentNode.parentNode.remove()
    }
    e.parentNode.parentNode.firstChild.textContent = newInput
}