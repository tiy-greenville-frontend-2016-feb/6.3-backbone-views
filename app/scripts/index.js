var $ = require('jquery');

var views = require('./views/todo');
var models = require('./models/todo');


$(function(){
  // Setup app
  var todos = new models.TodoCollection();
  var todoList = new views.TodoListView({collection: todos});

  // Render
  $('#container').html(todoList.render().el);

  // Simulate a fetch
  todos.add([
    {'task': 'Learn Backbone Views', 'completed': false},
    {'task': 'Hook up view to model with events', 'completed': false}
  ]);
})
