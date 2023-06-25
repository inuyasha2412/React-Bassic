import React from "react"
import { toast } from "react-toastify"
class AddTodo extends React.Component {
  state = {
    title: ""
  }
  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }
  handleAddTodo = () => {
    if (!this.state.title) {
      toast.error(`Missing Title Todo`)
      return
    }
    let todo = {
      id: Math.floor(Math.random() * 1100),
      title: this.state.title
    }
    this.props.addNewtodo(todo)
  }
  render() {
    return (
      <div className="add-todo">
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleOnChangeTitle(event)}
        />
        <button
          type="button"
          className="add"
          onClick={() => this.handleAddTodo()}>
          Add
        </button>
      </div>
    )
  }
}
export default AddTodo
