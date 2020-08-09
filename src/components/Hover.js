import React, { Component } from "react";

class Hover extends Component {
  render() {
    let position = this.props.getStyle(this.props.position);
    console.log(position);
    return (
      <div className="Tooltip">
        <div className="hover-div"
          onMouseLeave={this.props.mouseNotHover}
          onMouseEnter={this.props.mouseHover}
        >
          <p className="hover-div-text">{this.props.text}</p>
        </div>
        <div
          ref={this.props.toolTipRef}
          className={`tooltip-content ${position.toolTipPosition}`}
        >
          <div className="tooltip-info">Hello</div>
          <div className={`arrow ${position.arrowPosition}`}></div>
        </div>
      </div>
    );
  }
}

export default Hover;
