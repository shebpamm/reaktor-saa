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

              var fulltemps = data.map(
                entry => entry.temperatures
              );

              console.log(fulltemps);

              var locations = data.map( entry => entry.location );
              self.setState({
                cities : locations,
                temperatures: temperatures,
                fulltemps: fulltemps
              });
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
          <ListRow city={name} key={name} temperature={this.state.temperatures[i]} fulltemps={this.state.fulltemps[i]} />
        )}
      </div>
    );
  }
}

export default List;
