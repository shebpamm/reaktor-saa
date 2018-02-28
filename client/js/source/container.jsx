import React from "react";
import List from "./list.jsx";
import Header from "./header.jsx"

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <List ref="root" />
      </div>
    );
  }
}

export default Container;
