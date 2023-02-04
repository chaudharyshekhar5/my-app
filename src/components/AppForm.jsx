import { configure } from "@testing-library/react";
import React from "react";
import { useState } from "react";
function AppForm(props) {
  const [text, setText] = useState("");
  const handleupclick = () => {
    props.showAlert("Text converted to Uppercase", "success");
    if (text.length < 1) {
      setText("Please enter text first before clicking the button");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
    }
  };
  const handleloclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to LowerCase", "success");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };
  return (
    <>
      <div className="container">
        <div
          className="container"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleChange}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleupclick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleloclick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleClear}>
            Clear Text
          </button>
        </div>
        <div className="container my-3">
          <div
            className="container my-3"
            style={{ color: props.mode === "dark" ? "white" : "#042743" }}
          >
            <h2>Your text summary</h2>
            <p>
              {text.split(" ").length} words and {text.length} characters
            </p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppForm;
