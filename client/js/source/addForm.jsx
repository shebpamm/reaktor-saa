import React from "react";

class addForm extends React.Component {
  render() {
    return (
      <div className="addForm">
        <input
          placeholder="Uusi l\xE4mp\xF6tila..."
          id="tempInput"
          style={{
            display: "none"
          }}
        />
        <button
          style={{
            display: "none"
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default addForm;
