import React from "react";
import Position from "./Position";
import Hover from "./Hover";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      position: "top",
      text: "Hover Here",
    };
    this.setupRefs();
  }

  // funtion to initialize references
  setupRefs() {
    this.toolTipRef = React.createRef();
    this.positionRef = React.createRef();
  }

  //function to set current position of the toolTip
  handlePosition = () => {
    this.setState({
      /* positionRef is our reference, .current gives us the element being referred, 
       value gives us the curr value of the element */
      position: this.positionRef.current.value,
    });
  };

  // When mouse is hovering over Div
  mouseHover = () => {
    this.setState({
      text: <i className="fas fa-dog"></i>,
    });
    this.toolTipRef.current.style.visibility = "visible";
  };

  // when mouse is not hovering over Div
  mouseNotHover = () => {
    this.setState({
      text: "Hover Here",
    });
    this.toolTipRef.current.style.visibility = "hidden";
  };

  getStyle(position) {
    switch (position) {
      case "top":
        return {
          toolTipPosition: "top",
          arrowPosition: "arrow-bottom",
        };
      case "bottom":
        return {
          toolTipPosition: "bottom",
          arrowPosition: "arrow-top",
        };
      case "left":
        return {
          toolTipPosition: "left",
          arrowPosition: "arrow-right",
        };
      case "right":
        return {
          toolTipPosition: "right",
          arrowPosition: "arrow-left",
        };
      default:
        return {
          toolTipPosition: "top",
          arrowPosition: "bottom",
        };
    }
  }

  render() {
    return (
      <div className="App">
        <h1>ToolTip</h1>
        {/* Component to select position */}
        <Position
          positionRef={this.positionRef}
          handlePosition={this.handlePosition}
        />
        {/* Component on which tooltip will be displayed */}
        <Hover
          toolTipRef={this.toolTipRef}
          mouseHover={this.mouseHover}
          mouseNotHover={this.mouseNotHover}
          position={this.state.position}
          getStyle={this.getStyle}
          text={this.state.text}
        />
      </div>
    );
  }
}

export default App;
