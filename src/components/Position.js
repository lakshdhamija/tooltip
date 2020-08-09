import React, { Component } from "react";

class Position extends Component {
  render() {
    return (
      <div className="Position">
        <h3>Select Position: </h3>
        <select ref={this.props.positionRef} className="dropdown" onChange={this.props.handlePosition}>
          <option value="top">Top</option>
          <option value="down">Down</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </div>
    );
  }
}

export default Position;