import React from 'react';
import Position from './Position';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      position: "top"
    };
    this.setupRefs();
  }
  
  // funtion to initialize references
  setupRefs(){
    this.toolTipRef = React.createRef();
    this.positionRef = React.createRef();
  }

  //function to set current position of the toolTip
  handlePosition = () => {
    this.setState({
      // positionRef is our reference, .current gives us the element being referred, value gives us the curr value of the element
      position: this.positionRef.current.value 
    });
  }
  render() {
    return (
      <div className="App">
        <h1>ToolTip</h1>
        {/* Component to select position */}
        <Position positionRef={this.positionRef} handlePosition={this.handlePosition}/>
      </div>
    );
  }
}

export default App;
