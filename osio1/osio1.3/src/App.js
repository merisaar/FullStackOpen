import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      hyvä: 1,
      neutraali: 0,
      huono: 0,
      counter: 0
    }
  }
  nostaYhdellaHyvä = () =>
  () => {
    this.setState({hyvä : this.state.hyvä + 1 })
}
  nostaYhdellaNeutraali = () =>
  () => {
    this.setState({neutraali :this.state.neutraali + 1 })
}
  nostaYhdellaHuono = () =>
  () => {
    this.setState({huono : this.state.huono + 1  })
}


  render() {
    return (
      <div>
      <div>
        <br/>
      <Button
        handleClick={this.nostaYhdellaHyvä()}
        text="Hyvä"
        />
      <Button
        handleClick={this.nostaYhdellaNeutraali()}
        text="Neutraali"
        />
      <Button
        handleClick={this.nostaYhdellaHuono()}
        text="Huono"
        />

      </div>
      <br/>
        <Display counter = {this.state.hyvä} text="Votes for hyvä: "/>
        <Display counter = {this.state.neutraali} text="Votes for neutraali: "/>
        <Display counter = {this.state.huono} text="Votes for huono: "/>
    </div>
    );
  }
}
const Display = ({counter, text}) => {
  return (
    <div>{text} {counter}</div>
  )
}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


export default App;
