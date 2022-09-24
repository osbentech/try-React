import React from "react";
import TodosList from "./TodosList";
import TodoItem from "./TodoItem";
import Header from "./Header";
import InputTodo from "./inputTodo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true,
        man: "yes that's my name"
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: true,
        man: "that's my name"
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false,
        man: "yes"
      },
      {
        id: uuidv4(),
        title: "live to live matters",
        completed: false,
        man: "name"
      },
    ]
  };
  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }))
  };
  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    // adding new item
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }),
    })
  }
  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;