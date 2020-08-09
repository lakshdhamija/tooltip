import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      poition: "1",
    };
    this.setupRefs();
  }
  setupRefs(){
    this.toolTipRef = React.createRef();
    this.positionRef = React.createRef();
  }
  handlePosition(){
    this.setState({
      // positionRef is our reference, .current gives us the element being referred, value gives us the curr value of the element
      position: this.positionRef.current.value 
    })
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
