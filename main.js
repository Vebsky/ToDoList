const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const toDoList = [];
let taskNumber = document.querySelector('h3 span');
const search = document.querySelector('input.search')

const addTask = (e) => {
 e.preventDefault();
 const newTask = input.value;
 const li = document.createElement('li');
 li.innerHTML = `${newTask} <button>Usuń</button>`;
 toDoList.push(li);
 renderList();
 input.value = "";
 li.querySelector('button').addEventListener('click', removeTask)
}

const removeTask = (e) => {
 let index = e.target.parentNode.dataset.key;
 toDoList.splice(index, 1);
 renderList();
}

const renderList = () => {
 ul.textContent = "";
 toDoList.forEach((toDoElement, key) => {
  toDoElement.dataset.key = key;
  ul.appendChild(toDoElement);
 })
 taskNumber.textContent = toDoList.length;
}

const searchTask = (e) => {
 let searchText = e.target.value.toLowerCase();
 let filterTask = toDoList.filter(task => task.textContent.toLowerCase().includes(searchText));
 ul.textContent = "";
 filterTask.forEach(task => ul.appendChild(task));
}

form.addEventListener('submit', addTask);
search.addEventListener('input', searchTask);