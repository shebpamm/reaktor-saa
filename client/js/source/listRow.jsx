import React from "react";
import StatRow from "./statRow.jsx";
import AddForm from "./addForm.jsx";
import onClick from "./menu_animations.jsx"

class ListRow extends React.Component {
  componentDidMount() {

  }

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
            <dt>
              <StatRow />
              <span>14:03</span>
              <span
                style={{
                  float: "right",
                  color: "#DD2C00"
                }}
              >
                13°C
              </span>
            </dt>
            <dt>
              <span
                style={{
                  float: "left"
                }}
              >
                Kylmin hetki tänään
              </span>
              <span>18:22</span>
              <span
                style={{
                  float: "right",
                  color: "#01579B"
                }}
              >
                6°C
              </span>
            </dt>
            <dt>
              <span
                style={{
                  float: "left"
                }}
              >
                Lämpötilojen keskiarvo
              </span>
              <span>18:22</span>
              <span
                style={{
                  float: "right",
                  color: "#01579B"
                }}
              >
                6°C
              </span>
            </dt>
            <AddForm />
          </dl>
        </div>
      </div>
    );
  }
}

export default ListRow;
