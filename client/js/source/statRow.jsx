import React from "react";

class StatRow extends React.Component {

  constructor(props) {
    super(props);

    var date = new Date(props.temp.timestamp);

    var time = props.temp.timestamp != 0 ? ("0" + date.getHours()).substr(-2) + ':' + ("0" + date.getMinutes()).substr(-2) : ' 	‌';

    this.state = {
      text : props.text,
      time : time,
      temperature : props.temp.temperature
    }
  }

  componentWillReceiveProps(props) {
    var date = new Date(props.temp.timestamp);

    var time = props.temp.timestamp != 0 ? ("0" + date.getHours()).substr(-2) + ':' + ("0" + date.getMinutes()).substr(-2) : ' 	‌';

    this.setState({
      text : props.text,
      time : time,
      temperature : props.temp.temperature
    });
  }

  render() {
    return (
      <dt style={{
        height: this.state.temperature ? '' : '7px'
      }}>
      <span
        style={{
          float: "left"
        }}
      >
        {this.state.temperature ? this.state.text : ''}
      </span>
      <span>{this.state.time}</span>
      <span
        style={{
          float: "right",
          color: this.props.color,
          height: this.state.temperature ? '' : '7px'
        }}
      >
        {this.state.temperature ? this.state.temperature.toFixed(1) + '°C' : ''}
      </span>
    </dt>
    );
  }
}

export default StatRow;
