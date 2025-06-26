const input = document.getElementById("input");
const boxes = document.getElementById("boxes");
let taskArr = JSON.parse(localStorage.getItem('task') || '[]');

function AddTask(){
    let task = input.value;
    if (task == "") {
        alert("Please enter a task");
        return;
    }
    taskArr.push(task)
    localStorage.setItem('task',JSON.stringify(taskArr))
    input.value = ''
    fetchTask()
}
function RemoveTask(e){
    let task = e.parentNode.parentNode.children[0].innerText;
    taskArr.splice(taskArr.indexOf(task), 1)
    console.log(taskArr)
    localStorage.setItem('task',JSON.stringify(taskArr))
    fetchTask()
}
function EditTask(e){
    let task = e.parentNode.parentNode.children[0].innerText;
    taskArr.splice(taskArr.indexOf(task), 1)
    localStorage.setItem('task',JSON.stringify(taskArr))
    input.value = task
    fetchTask()
}
function ClrAll() {
    taskArr = []
    boxes.innerHTML = "";
    localStorage.setItem('task','')
    fetchTask()
}
function fetchTask(){
    let tasks = JSON.parse(localStorage.getItem('task') || '[]')
    if (tasks.length == 0) {
        boxes.innerHTML = "<p>No Tasks to show!!!</p>";
        return;
    }
    boxes.innerHTML = "";
    tasks.forEach(task => {
        boxes.innerHTML += `<div id="box">
                <div id="text">${task}</div>
                <div class="btns2">
                    <button onclick="RemoveTask(this)" id="remove">Remove</button>
                    <button onclick="EditTask(this)" id="remove">Edit</button>
                </div>
            </div>`
    });
}
fetchTask()