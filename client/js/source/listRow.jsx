import React from "react";
import statRow from "./statRow.jsx";
import addForm from "./addForm.jsx";

class listRow extends React.Component {
  render() {
    return (
      <div className="list-row">
        <span className="location">Tokyo</span>
        <span className="temperature">9°C</span>
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
              <statRow />
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
            <addForm />
          </dl>
        </div>
      </div>
    );
  }
}

export default listRow;
