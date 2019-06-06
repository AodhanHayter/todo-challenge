import todos from './api/todos.js';

let todosObj;

function TodosState(todo = [], inProgress = [], done = []) {
  this.todo = todo;
  this.inProgress = inProgress;
  this.done = done;
}


todos.get().then(todoRes => {
  const todo = todoRes.filter(task => task.status === 'todo');

  todosObj = new TodosState(todo)

  todosList = todoRes;
  document.querySelector('.todo').innerHTML = todosList
    .filter(task => task.status === 'todo')
    .map(task => `<li>${task.text}</li>`)
    .join('');

  document.querySelector('.in-progress').innerHTML = todosList
    .filter(task => task.status === 'inProgress')
    .map(task => `<li>${task.text}</li>`)
    .join('');

  document.querySelector('.done').innerHTML = todosList
    .filter(task => task.status === 'done')
    .map(task => `<li>${task.text}</li>`)
    .join('');
});

document.querySelector('.todo-add').addEventListener('click', function(event) {
  const input = document.querySelector('.todo-input');
  todos.add(input.value).then(newTodoItem => {
    todosObj.todo.push()
    input.value = '';
    const item = document.createElement('li');
    item.textContent = newTodoItem.text;
    document.querySelector('.todo').append(item);
  });
});
