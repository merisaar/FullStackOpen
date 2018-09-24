import React, { Component } from 'react';
import {Button} from './Button.js'
import {Statistic} from './Statistic.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      hyvä: 0,
      neutraali: 0,
      huono: 0,
      counter: 0,
      yhteensa: 0
    }
  }
  nostaYhdellaHyvä = () =>
  () => {
    this.setState({
      hyvä : this.state.hyvä + 1,
      counter: this.state.counter + 1,
      yhteensa: this.state.yhteensa + 1
    })
}
  nostaYhdellaNeutraali = () =>
  () => {
    this.setState({
      neutraali :this.state.neutraali + 1,
      counter: this.state.counter + 1,
      yhteensa: this.state.yhteensa + 0
    })
}
  nostaYhdellaHuono = () =>
  () => {
    this.setState({
      huono : this.state.huono + 1,
      counter: this.state.counter + 1,
      yhteensa: this.state.yhteensa - 1 })
}

laskeKeskiarvo = (ct, yht) => {
  return ct === 0
  ? 0
  : (yht/ct).toFixed(2)
}

laskeProsentti = (ct, hyväCount) => {
  return ct === 0
  ? 0
  : ((hyväCount/ct)*100).toFixed(1)
}


  render() {

    return (
    <div>
        <Head text = "Anna palautetta:"/>
        <table>
        <tr>
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
        </tr>
        <tr>
        <Head text = "Statistiikka:"/>
        </tr>
          <Statistics app = {this}/>
          </table>

        </div>

    )
  }
}
const statistiikka = {
  hyvä: 0,
  neutraali: 0,
  huono: 0
}
const Statistics = ({app}) => {
  return app.state.counter == 0
  ? (<tr> Ei yhtään palautetta annettu. </tr>)
  : (
    <div>
    <Statistic stat = {app.state.hyvä} text="Hyviä: "/>
    <Statistic stat = {app.state.neutraali} text="Neutraaleja: "/>
    <Statistic stat = {app.state.huono} text="Huonoja: "/>
    <Statistic stat = {app.laskeKeskiarvo(app.state.counter, app.state.yhteensa)} text="Keskiarvo: "/>
    <Statistic stat = {app.laskeProsentti(app.state.counter, app.state.hyvä)} text="Positiivisia " text2=" %"/>
    <Statistic stat = {app.state.counter} text="Yhteensa " text2=" ääntä"/>
    </div>
  )
}
const Head = ({text}) => {
  return (
    <div> <p> <b> {text} </b> </p> </div>
)}
export default App;
