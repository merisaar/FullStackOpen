import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      points: {0:0, 1:0, 2:0, 3:0, 4:0, 5:0}
    }

  }
  randomizeAnecdote = () =>
    () => {
      const min = 0;
      const max = 5;
      let rand =Math.floor(Math.random() * Math.floor(max));
      (rand == this.state.selected) ? rand=Math.floor(this.state.selected/2)+2 : console.log('Ei osunu')
      // rand == this.state.selected
      this.setState({
        selected: rand
      })

  }

  render() {
    const copy = {...this.state.points}
    const vote = (select) =>
    () => {
      copy[select] = this.state.points[select] + 1
      this.setState({
        points: copy
      })
    }
    return (
      <div>
      <div>
      {this.props.anecdotes[this.state.selected]}
      </div>
      <div>
      {this.state.points[this.state.selected]} votes
      </div>
      <br/>
        <Button handleClick = {vote(this.state.selected)} text ='Vote'/>
        <Button handleClick = {this.randomizeAnecdote()} text ='Next anecdote'/>
      </div>
    )
  }
}
// const points = {
//   0:0,  1:0,  2:0,  3:0,  4:0,  5:0
// }
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
      </button>
)

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
