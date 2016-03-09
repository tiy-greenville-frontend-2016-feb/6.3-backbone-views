var $ = require('jquery');
var Backbone = require('backbone');
var handlebars = require('handlebars');

// List View
var TodoListView = Backbone.View.extend({
  tagName: "ul",
  className: "todo-items",
  id: "todo-items",
  initialize: function() {
    this.listenTo(this.collection, "add", this.renderTodoItem);
  },
  render: function(){
    return this;
  },
  renderTodoItem: function(todo){
    var view = new TodoItemView({ model: todo });
		this.$el.append(view.render().el);
  }
});

// Individual Item View
var TodoItemView = Backbone.View.extend({
  template: handlebars.compile($('#todo-item').html()),
  events: {
    "click .clickMe": "complete",
    "dblclick .clickMe": "doubleTime"
  },
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'visible', this.toggleVisible);
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

module.exports = {
  'TodoListView': TodoListView,
  'TodoItemView': TodoItemView
};
