import React from "react";
import ReactDOM from "react-dom";
import * as animations from "./menu_animations.jsx"

class AddForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value : ''
    };
  }

  submitTemperature(e) {
    var self = this;
    var temperature = parseFloat(this.state.value);
    if(temperature == null) return;
    var timestamp = Date.now();
    var data = {
      "temperatures" :
        {
          "temperature" : temperature,
          "timestamp" : timestamp
        }
    };
    $.ajax({
      type: "PUT",
      url: "/api/weathers/" + this.props.city_id,
      data: JSON.stringify(data),
      success: function(){
        self.props.root.fetchTemperatureData();
        self.setState({value : ''})
        const inputNode = ReactDOM.findDOMNode(self.inputField)
        $(inputNode).animate({width : 100}, 600, function() {
          $(inputNode).attr('placeholder', 'Uusi Lämpötila...');
          $('.addForm > button').hide(100);
        })
      },
      dataType: "json",
      contentType : "application/json",
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(errorThrown)
      }
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

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
      value={this.state.value}
      onChange={(e) => this.handleChange(e)}
      ref={input => this.inputField = input}
      />
      <button
      style={{
        display: "none"
      }}
      onClick={(event) => this.submitTemperature(event)}
      >
      +
      </button>
      </div>
    );
  }
}

export default AddForm;
