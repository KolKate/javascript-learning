
function ListTodos() {
  var todos = data.read('todos');
  if (!todos) {
    todos = [];
    data.create('todos', JSON.stringify(todos));
  }

  var self = this;

  events.subscribe('get-todos-list', function() {
    self.getList();
  });
}

ListTodos.prototype.getList = function() {
  var self = this;
  var todos = JSON.parse(data.read('todos'));

  var todosEl = document.getElementById('todo_items');
  todosEl.innerHTML = '';

  var todosBodyEl = markup.create({
    tag: 'tbody',
    parent: todosEl
  });

  if (!todos.length) {
    return false
  }

  todos.forEach(function(todo, index) {
    var todoEl = markup.create({
      tag: 'tr',
      parent: todosBodyEl,
      className: todo.checked ? 'success' : ''
    });

    var todoCellCheckboxEl = markup.create({
      tag: 'td',
      parent: todoEl,
      attrs: [
        { width: '30' }
      ]
    });

    var todoCellTextEl = markup.create({
      tag: 'td',
      parent: todoEl,
    });

    var todoSpanTextEl = markup.create({
      tag: 'span',
      parent: todoCellTextEl,
      content: todo.text,
      className: todo.checked ? 'checked' : ''
    });

    var todoInputTextEl = markup.create({
      tag: 'input',
      parent: todoCellTextEl,
      attrs: [{placeholder: todo.text}],
      className: 'hidden'
    });

    var todoCellActionsEl = markup.create({
      tag: 'td',
      parent: todoEl,
      attrs: [
        { width: '30' }
      ]
    });

    var todoCheckboxEl = markup.create({
      tag: 'span',
      className: 'glyphicon glyphicon-' + (todo.checked ? 'check' : 'unchecked'),
      parent: todoCellCheckboxEl
    });

    var todoActionEditEl = markup.create({
      tag: 'button',
      attrs: [
        { type: 'button' }
      ],
      className: 'btn btn-danger btn-xs',
      content: '<span class="glyphicon glyphicon-pencil"></span>',
      parent: todoCellActionsEl
    });

    var todoActionDeleteEl = markup.create({
      tag: 'button',
      attrs: [
        { type: 'button' }
      ],
      className: 'btn btn-danger btn-xs',
      content: '<span class="glyphicon glyphicon-remove"></span>',
      parent: todoCellActionsEl
    });

    events.on(todoCellCheckboxEl, 'click', function(event) {
      event.preventDefault();
      self.doCheck(todoEl, todoCheckboxEl, todoSpanTextEl, todos, todo, index);
    });

    

    events.on(todoActionDeleteEl, 'click', function(event) {
      self.delete(index, todos);
    });

    events.on(todoActionEditEl, 'click', function(event) {
      event.preventDefault();
      self.edit(todoInputTextEl, todoSpanTextEl, todo, todoActionEditEl, todos,
  index);
    });
  });
};

ListTodos.prototype.edit = function(
  todoInputTextEl,
  todoSpanTextEl,
  todo,
  todoActionEditEl,
  todos,
  index
  ){
  var toChange = todoInputTextEl.className === 'hidden';
  var buttonSpan = todoActionEditEl.querySelector('span');
  if(toChange){
    todoSpanTextEl.className = 'hidden ' + (todo.checked ? 'checked' : '');
    todoInputTextEl.className = '';
    buttonSpan.className = 'glyphicon glyphicon-ok-sign';
  } else {
    //save
    todoInputTextEl.className = 'hidden'; 
    todoSpanTextEl.className = todo.checked ? 'checked' : '';
    buttonSpan.className = 'glyphicon glyphicon-pencil';
    todos[index].text = todoInputTextEl.value;
    data.update('todos', JSON.stringify(todos));
    events.send('get-todos-list');
  }

  

};

ListTodos.prototype.doCheck = function(
  todoEl,
  todoCheckboxEl,
  todoSpanTextEl,
  todos,
  todo,
  index
) {
  var isChecked = todoCheckboxEl.className === 'glyphicon glyphicon-check';
  var isSpanHidden = todoSpanTextEl.className.indexOf('hidden') != -1;
  if (isChecked) {
    todoEl.className = '';
    todoCheckboxEl.className = 'glyphicon glyphicon-unchecked';
    todoSpanTextEl.className = isSpanHidden ? 'hidden' : '';
    todo.checked = false;
  } else {
    todoEl.className = 'success';
    todoCheckboxEl.className = 'glyphicon glyphicon-check';
    todoSpanTextEl.className = 'checked ' + (isSpanHidden ? 'hidden' : '');
    todo.checked = true;
  }

  todos[index] = todo;
  data.update('todos', JSON.stringify(todos));
};

ListTodos.prototype.delete = function(index, todos) {
  todos.splice(index, 1);
  data.update('todos', JSON.stringify(todos));
  events.send('get-todos-list');
};

var listTodos = new ListTodos();
