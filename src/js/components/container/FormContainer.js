import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        formContainer component
        <Input />
      </div>
    );
  }
}

export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
