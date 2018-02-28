import React from "react";
import ListRow from "./listRow.jsx";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: []
    }

  }

  fetchTemperatureData() {
    var self = this;
    jQuery.ajax({
            url: "/api/weathers",
            type: "GET",

            contentType: 'application/json',
            success: function(data) {
              var temperatures = data.map(
                entry => entry.temperatures.length ? entry.temperatures[entry.temperatures.length-1].temperature : null
              );

              var fulltemps = data.map(
                entry => entry.temperatures
              );

              var coords = data.map( entry => entry.coords );
              var city_ids = data.map( entry => entry._id );

              var locations = data.map( entry => entry.location );
              self.setState({
                cities : locations,
                temperatures: temperatures,
                fulltemps: fulltemps,
                coords: coords,
                city_ids: city_ids
              });
            },
            error : function(jqXHR, textStatus, errorThrown) {
              console.log(errorThrown)
            },

            timeout: 60000,
        });
  }

  componentDidMount() {
    this.fetchTemperatureData();
  }

  render() {
    return (
      <div className="list" id="list">
        {this.state.cities.map( (name, i) =>
          <ListRow city={name} key={name} temperature={this.state.temperatures[i]} fulltemps={this.state.fulltemps[i]} coords={this.state.coords[i]} city_id={this.state.city_ids[i]} root={this} />
        )}
      </div>
    );
  }
}

export default List;
