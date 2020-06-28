// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      toggled: false
    };
  }

  handleClick = () => {
    // Update our state here...
    this.setState(previousState => {return {toggled: !previousState.toggled}})
    console.log(this.state.toggled)
  };

  render() {
    return (
      <div>
        <p>I have {this.state.toggled ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;
