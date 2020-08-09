import React, { Component } from "react";

class Hover extends Component {
  render() {
    let position = this.props.getStyle(this.props.position);
    console.log(position);
    return (
      <div className="Tooltip"
        onMouseLeave={this.props.mouseNotHover}
        onMouseEnter={this.props.mouseHover}>
        <p>{this.props.text}</p>
        <div ref={this.props.toolTipRef} className={`tooltip ${position.toolTipPosition}`}>
          <div className="tooltip-info">Hello</div>
          <div className={`arrow ${position.arrowPosition}`}></div> 
        </div>
      </div>
    );
  }
}

export default Hover;
