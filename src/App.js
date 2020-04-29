import React, { Component } from "react";
import Box from './Box'
import "./App.css";

class App extends Component {
  static defaultProps = {
    boxes: Array.from({length: 10})
  }
  constructor(props) {
    super()

    this.state = {
      colors: ['blue', 'purple', 'pink', 'black', 'magenta', 'white', 'yellow', 'red']
    }
  }

  changeColor = (idx) => {
    var i = Math.floor(Math.random() * this.state.colors.length)

    while (i === idx) {
      i = Math.floor(Math.random() * this.state.colors.length)
    }

    return this.state.colors[i]

  }

  render() {
    return (
      <div className='App'>
        <ul className='container'>
          {
            this.props.boxes.map((box, i) => {
              return <Box
                color={this.state.colors[i % this.state.colors.length]}
                key={i}
                i={i}
                changeColor={this.changeColor}
              />
            }
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
