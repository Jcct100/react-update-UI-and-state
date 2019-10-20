import React, { Component } from "react";
import TodoItem from "./Todoitem";

export default class Todo extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
      />
    ));
  }
}
