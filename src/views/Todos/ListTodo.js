import React from "react"
import "./ListTodo.scss"
import AddTodo from "./AddTodo"
import { toast } from "react-toastify"
class ListTodo extends React.Component {
  state = {
    ListTodos: [
      { id: "todo1", title: "Doing Homework" },
      { id: "todo2", title: "Play Game" },
      { id: "todo3", title: "Coding" }
    ]
  }
  addNewTodo = (todo) => {
    this.setState({
      ListTodos: [...this.state.ListTodos, todo]
    })
    toast.success("Da add thanh cong")
  }
  render() {
    let { ListTodos } = this.state
    return (
      <div className="list-todo-container">
        <AddTodo addNewtodo={this.addNewTodo} />
        <div className="list-todo-content">
          {ListTodos &&
            ListTodos.length > 0 &&
            ListTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span>
                    {index + 1} - {item.title}
                  </span>
                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}
export default ListTodo
