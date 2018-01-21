import React from "react";
import ListRow from "./listRow.jsx";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: []
    }

  }

  componentDidMount() {
    var self = this;
    jQuery.ajax({
            url: "/api/weathers",
            type: "GET",

            contentType: 'application/json',
            success: function(data) {
              var temperatures = data.map(
                entry => entry.temperatures.length ? entry.temperatures[0].temperature : null
              );
              console.log(temperatures)
              var locations = data.map( entry => entry.location );
              self.setState({
                cities : locations,
                temperatures: temperatures
              })
            },
            error : function(jqXHR, textStatus, errorThrown) {
              console.log(errorThrown)
            },

            timeout: 60000,
        });

  }

  render() {
    return (
      <div className="list" id="list">
        {this.state.cities.map( (name, i) =>
          <ListRow city={name} key={name} temperature={this.state.temperatures[i]} />
        )}
      </div>
    );
  }
}

export default List;
