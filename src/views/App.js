import logo from "./logo.svg"
import "./App.scss"
// import MyComponent from "./EX/MyComponent";
import ListTodo from "./Todos/ListTodo"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ho Qui Day Hoc React</p>
        {/* <MyComponent /> */}
        <ListTodo />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </header>
    </div>
  )
}

export default App
