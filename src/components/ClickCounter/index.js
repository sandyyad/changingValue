import {Component} from 'react'

class ClickCounter extends Component {
  state: {count: 0}

  onInc = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>
          The button has been Clicked<span>{count}</span>times
        </h1>
        <p>Click the button to Increase the Value</p>
        <button onClick={this.onInc}>Click me!</button>
      </div>
    )
  }
}

export default ClickCounter
