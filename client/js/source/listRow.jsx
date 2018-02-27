import React from "react";
import StatRow from "./statRow.jsx";
import AddForm from "./addForm.jsx";
import onClick from "./menu_animations.jsx"

class ListRow extends React.Component {

  constructor(props) {
    super(props);

    var fulltemps = props.fulltemps;
    var sum = 0;
    var temps = fulltemps.map(
      entry => entry.temperature
    );
    temps.forEach(function (n) {
      sum += n;
    })

    var maxTemp = fulltemps.length ? fulltemps[temps.indexOf(Math.max(...temps))] : {temperature : 0, timestamp : 0};
    var minTemp = fulltemps.length ? fulltemps[temps.indexOf(Math.min(...temps))] : {temperature : 0, timestamp : 0};

    var mean = {
      temperature : sum / fulltemps.length,
      timestamp : 0
    };

    this.state = {
      maxTemp : maxTemp,
      minTemp : minTemp,
      mean : mean
    };
  };

  render() {
    return (
      <div className="list-row" onClick={onClick}>
        <span className="location">{this.props.city}</span>
        <span className="temperature">{this.props.temperature}°C</span>
        <div
          className="content"
          style={{
            display: "none"
          }}
        >
          <dl
            style={{
              textAlign: "center"
            }}
          >
            <dt className="coords">
              <img src="resources/position-marker-icon.svg" className="icon" />
              <span className="coords">
                35.6584421, 139.7328635<span />
              </span>
            </dt>

              <StatRow color="#DD2C00" text="Kuumin hetki tänään" temp={this.state.maxTemp} />
              <StatRow color="#01579B" text="Kylmin hetki tänään" temp={this.state.minTemp} />
              <StatRow color="" text="Lämpötilojen keskiarvo" temp={this.state.mean} />

            <AddForm />
          </dl>
        </div>
      </div>
    );
  }
}

export default ListRow;
