import React from 'react'
import './Box.css'

class Box extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentColor: this.props.color
    }
  }

  handleChange = (i) => {

    var newColor = this.props.changeColor(i)

    this.setState({
      currentColor: newColor
    })
  }

  render() {
    const { i } = this.props

    return (
      <div
        className='box'
        style={{'backgroundColor': this.state.currentColor}}
        onClick={() => this.handleChange(i)}
      >
      </div>
    )
  }
}

export default Box