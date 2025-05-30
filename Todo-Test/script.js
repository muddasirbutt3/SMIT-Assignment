const input = document.getElementById("input")
const search = document.getElementById("search")
const list = document.getElementById("list")
let items = Array.from(list.querySelectorAll('.item'))
let tasks = []

function Add() {
    let item = input.value.trim()
    if (tasks.includes(item)) {
        alert("Task already exists!")
        return
    }
    if (!item) {
        alert("Enter a Task!")
        return
    }
    list.innerHTML += `
    <div class="item">
        <div class="text">${item}</div>
        <button class="remove" onclick="Remove(this)">X</button>
    </div>`
    input.value = ""
    tasks.push(item)
    items = Array.from(list.querySelectorAll('.item'))
}

search.addEventListener('input',() => {
    const seaValue = search.value.toLowerCase()
    items = Array.from(list.querySelectorAll('.item'))
    list.innerHTML = ''
    
    if (seaValue.length == '') {
        tasks.forEach((item) => {
            list.innerHTML += `
            <div class="item">
            <div class="text">${item}</div>
            <button class="remove" onclick="Remove(this)">X</button>
            </div>`
        })
        return
    }
    
    
    let newArr = items.filter((item) => {
        const text = item.firstElementChild.textContent.toLowerCase()
        return text.includes(seaValue)
    })

    
    if (newArr.length == 0) {
    list.innerHTML = `
    <div class="item">
        <div class="text">No match</div>
    </div>`
    return
    }
    newArr.forEach((item) => {
        list.innerHTML += `
        <div class="item">
        <div class="text">${item.firstElementChild.textContent.toLowerCase()}</div>
        <button class="remove" onclick="Remove(this)">X</button>
        </div>`
    })
})
function Remove(e) {
    let value = e.parentNode.firstElementChild.textContent.toLowerCase()
    console.log(tasks.indexOf(value));
    
    e.parentNode.remove()
    tasks.splice(tasks.indexOf(value),1)
}
