import React from "react";

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

export default AddForm;
