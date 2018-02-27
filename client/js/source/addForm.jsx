import React from "react";
import * as animations from "./menu_animations.jsx"

class AddForm extends React.Component {
  render() {
    return (
      <div className="addForm">
        <input
          placeholder="Uusi lämpötila..."
          className="tempInput"
          style={{
            display: "none"
          }}
          onFocus={animations.resizeInput}
          onBlur={animations.resizeInputDown}
          onKeyPress={animations.inputCheck}
        />
        <button
          style={{
            display: "none"
          }}
          onClick={animations.submitTemperature}
        >
          +
        </button>
      </div>
    );
  }
}

export default AddForm;
