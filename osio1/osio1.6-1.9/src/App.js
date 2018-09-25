import React, { Component } from 'react';
import {Button} from './Button.js'
import {Statistic} from './Statistic.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      // hyvä:0,
      // neutraali:0,
      // huono:0,
      stats: {   hyvä:0, neutraali:0, huono:0 },
      counter: 0,
      yhteensa: 0
    }
  }
//   nostaYhdellaHyvä = () =>
//   () => {
//     this.setState({
//       hyvä : this.state.hyvä + 1,
//       counter: this.state.counter + 1,
//       yhteensa: this.state.yhteensa + 1
//     })
// }
//   nostaYhdellaNeutraali = () =>
//   () => {
//     this.setState({
//       neutraali :this.state.neutraali + 1,
//       counter: this.state.counter + 1,
//       yhteensa: this.state.yhteensa + 0
//     })
// }
//   nostaYhdellaHuono = () =>
//   () => {
//     this.setState({
//       huono : this.state.huono + 1,
//       counter: this.state.counter + 1,
//       yhteensa: this.state.yhteensa - 1 })
// }

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
    const statsCopy = {...this.state.stats}
    const nostaYhdella = (select, yht) =>
    () => {
      let yht = 0
      if(select === 'hyvä'){
        yht = 1
      }else if(select === 'huono'){
        yht = -1
      }
      console.log(this.state.yhteensa)
      statsCopy[select] = this.state.stats[select] + 1
      this.setState({
        stats: statsCopy,
        counter: this.state.counter + 1,
        yhteensa: this.state.yhteensa + yht
      })
  }

    return (
    <div>
    <table>
    <tbody>
    <tr><td>
        <Head text = "Anna palautetta:"/>
        </td></tr>
        <tr><td>
      <Button
        handleClick={nostaYhdella('hyvä')}
        text="Hyvä"
        />
      <Button
        handleClick={nostaYhdella('neutraali')}
        text="Neutraali"
        />
      <Button
        handleClick={nostaYhdella('huono')}
        text="Huono"
        />
        </td></tr>
        <tr><td>
        <Head text = "Statistiikka:"/>
        </td></tr>
        </tbody>
          <Statistics app = {this}/>
          </table>

        </div>

    )
  }
}
const Statistics = ({app}) => {
  return app.state.counter === 0
  ? (<tbody><tr><td> Ei yhtään palautetta annettu. </td></tr></tbody>)
  : (
    <tbody>
    <Statistic stat = {app.state.stats['hyvä']} text="Hyviä: "/>
    <Statistic stat = {app.state.stats['neutraali']} text="Neutraaleja: "/>
    <Statistic stat = {app.state.stats['huono']} text="Huonoja: "/>
    <Statistic stat = {app.laskeKeskiarvo(app.state.counter, app.state.yhteensa)} text="Keskiarvo: "/>
    <Statistic stat = {app.laskeProsentti(app.state.counter, app.state.stats['hyvä'])} text="Positiivisia " text2=" %"/>
    <Statistic stat = {app.state.counter} text="Yhteensa " text2=" ääntä"/>
    </tbody>
  )
}
const Head = ({text}) => {
  return (
    <div> <p> <b> {text} </b> </p> </div>
)}
export default App;
