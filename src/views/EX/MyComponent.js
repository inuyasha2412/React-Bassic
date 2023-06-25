import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  state = {
    fistName: "",
    lastName: "",
  };
  handleChangeFirstName = (event) => {
    this.setState({
      fistName: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("du lieu nhap vao: ", this.state);
  };
  render() {
    return (
      <>
        <form>
          <label for="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.fistName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label for="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <br />
          <input
            type="button"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
        <ChildComponent name={"ChildOne"} />
      </>
    );
  }
}
export default MyComponent;
