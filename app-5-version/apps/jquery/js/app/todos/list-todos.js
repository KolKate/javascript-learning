
function ListTodos() {
  var todos = data.read('todos');
  if (!todos) {
    todos = [];
    data.update('todos', JSON.stringify(todos));
  }

  var self = this;

  events.subscribe('get-todos-list', function() {
    self.getList();
  });
}

ListTodos.prototype.getList = function() {
  var self = this;
  var todos = data.read('todos');
  todos = JSON.parse(todos);

  var $todos = $('#todo_items');
  $todos.html('');

  var $todosBody = $('<tbody/>');
  $todos.append($todosBody);

  if (!todos.length) {
    return false
  }

  todos.forEach(function(todo, index) {
    var $todo = $('<tr>');

    var $todoCellCheckbox = $('<td/>');
    $todoCellCheckbox.width(30);
    $todoCellCheckbox.click(function(event) {
      event.preventDefault();
      self.doCheck($todo, $todoCheckbox, $todoCellText, todos, todo, index);
    });

    var $todoCellText = $('<td/>');
    $todoCellText.html('<span>' + todo.text + '</span>');

    var $todoInput = $('<input/>');
    //$todoInput.attr('placeholder', todo.text);
    $todoInput.val(todo.text);
    $todoInput.hide();

    
    var $todoCellActions = $('<td/>');
    $todoCellActions.width(30);

    var $todoCheckbox = $('<span/>');
    $todoCheckbox.addClass('glyphicon glyphicon-' + (todo.checked ? 'check' : 'unchecked'));

    var $todoActionDelete = $('<button type="button"/>');
    $todoActionDelete.addClass('btn btn-danger btn-xs')
      .html('<span class="glyphicon glyphicon-remove"></span>')
      .click(function(event) {
      self.delete(index, todos);
    });

      var $todoActionEdit = $('<button type="button"/>');
    $todoActionEdit.addClass('btn btn-info btn-xs')
      .html('<span class="glyphicon glyphicon-pencil"></span>')
      .click(function(event) {
      self.edit($todoCellText,$todoActionEdit,todos,todo,index, $todoInput);
      $todoInput.focus();
    });

    if (todo.checked) {
      $todo.addClass('success');
      $todoCellText.addClass('checked');
    }

    $todoCellCheckbox.append($todoCheckbox);
    $todoCellActions.append($todoActionEdit);
    $todoCellActions.append($todoActionDelete);
    $todo.append($todoCellCheckbox);
    $todo.append($todoCellText);
    $todoCellText.append($todoInput);
    $todo.append($todoCellActions);
    $todosBody.append($todo);
  });
};

ListTodos.prototype.edit = function(
  $todoCellText,
  $todoActionEdit,
  todos,
  todo,
  index,
  $todoInput
) {
  var toChange = $todoActionEdit.find('span').hasClass('glyphicon glyphicon-pencil');
  var changeClass = $todoActionEdit.find('span');

  if (toChange) {

    changeClass.removeClass('glyphicon glyphicon-pencil');
    changeClass.addClass('glyphicon glyphicon-ok-sign');
    $todoCellText.find('span').hide();
    $todoInput.show();

  } else{
    $todoCellText.find('span').show();
    $todoInput.hide();
    changeClass.removeClass('glyphicon glyphicon-ok-sign');
    changeClass.addClass('glyphicon glyphicon-pencil');

   todos[index].text = $todoInput.val();
   data.update('todos', JSON.stringify(todos));
   events.send('get-todos-list');
  }

 
};

ListTodos.prototype.doCheck = function(
  $todo,
  $todoCheckbox,
  $todoCellText,
  todos,
  todo,
  index
) {
  var isChecked = $todoCheckbox.hasClass('glyphicon glyphicon-check');

  if (isChecked) {
    $todo.removeClass('success');
    $todoCheckbox.removeClass('glyphicon glyphicon-check');
    $todoCheckbox.addClass('glyphicon glyphicon-unchecked');
    $todoCellText.removeClass('checked');
    todo.checked = false;
  } else {
    $todo.addClass('success');
    $todoCheckbox.removeClass('glyphicon glyphicon-unchecked');
    $todoCheckbox.addClass('glyphicon glyphicon-check');
    $todoCellText.addClass('checked');
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
