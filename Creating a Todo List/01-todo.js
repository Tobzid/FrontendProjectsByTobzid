const todoList = [{name:'Tobzid',
dueDate:'2023-09-10'}, 
{name: 'GradSchool',
dueDate:'2023-09-10'}];

rendertodoList();

function rendertodoList(){
let todoListHTML = ' ';

for(let i =0; i < todoList.length; i++){
    const todoObject = todoList[i];
    //const name =todoObject.name;
    //const dueDate =todoObject.dueDate;
    const {name, dueDate} = todoObject;

    const html = `
    <div>${name} </div>
    <div> ${dueDate} </div>
     
    <button onclick="
    todoList.slice(${i}, 1);
    rendertodoList();
    " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
}
//console.log(todoListHTML);

document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date');
    const dueDate = dateInputElement.value;

    todoList.push({//name: name,
        //dueDate: dueDate
    name,
    dueDate});
    //console.log(todoList)

    inputElement.value = ' ';

    rendertodoList();
}