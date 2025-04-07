
function addTodo() {
  const input = document.getElementById('todo-input');
  const task = input.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.innerHTML = `${task} <button class="delete-btn" onclick="deleteTodo(this)">X</button>`;
  document.getElementById('todo-list').appendChild(li);

  input.value = '';
}

function deleteTodo(btn) {
  const li = btn.parentElement;
  li.remove();
}
function addTodo() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    if (task === '') return;
  
    const li = document.createElement('li');
  
    // Create span to hold task text
    const taskText = document.createElement('span');
    taskText.textContent = task;
  
    // Create Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.onclick = function () {
      const newTask = prompt('Edit task:', taskText.textContent);
      if (newTask !== null && newTask.trim() !== '') {
        taskText.textContent = newTask.trim();
      }
    };
  
    // Create Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
      li.remove();
    };
  
    // Assemble the task
    li.appendChild(taskText);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
  
    document.getElementById('todo-list').appendChild(li);
    input.value = '';
  }
  