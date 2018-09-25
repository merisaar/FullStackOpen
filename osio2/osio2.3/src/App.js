// import React from 'react';
// import './App.css';
// import Note from './Note';
// class App extends React.Component {
//
//   constructor(props) {
//     super(props)
//     this.state = {
//       notes: props.notes,
//       newNote: 'uusi muistiinpano...',
//       showAll: true
//     }
//   }
//
//   handleNoteChange = (event) => {
//       console.log(event.target.value)
//       this.setState({ newNote: event.target.value })
//     }
//
//   addNote = (event) => {
//     event.preventDefault()
//     console.log('nappia painettu')
//     const noteObject = {
//       content: this.state.newNote,
//       date: new Date().toISOString(),
//       important: Math.random() > 0.5,
//       id: this.state.notes.length + 1
//   }
//     const notes = this.state.notes.concat(noteObject)
//     this.setState({
//       notes,
//       newNote: ''
//     })
// }
// toggleVisible = () => {
//     this.setState({showAll: !this.state.showAll})
//   }
//
//   render() {
//     // {this.state.notes.map(note => <Note key={note.id} note={note} />)}
//     const notesToShow =
//     this.state.showAll ?
//       this.state.notes :
//       this.state.notes.filter(note => note.important === true)
//     const label = this.state.showAll ? 'vain tärkeät' : 'kaikki'
//     return (
//        <div>
//          <h1>Muistiinpanot</h1>
//          <div>
//           <button onClick={this.toggleVisible}>
//             näytä {label}
//           </button>
//         </div>
//          <ul>
//             {notesToShow.map(note => <Note key={note.id} note={note} />)}
//           </ul>
//          <form onSubmit={this.addNote}>
//            <input placeholder={this.state.newNote}
//            onChange={this.handleNoteChange}/>
//            <button type="submit">tallenna</button>
//          </form>
//        </div>
//     )
//   }
// }
//
//
// export default App;

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', id: 1}
      ],
      newName: ''
    }
  }

  addNote = (event) => {
      event.preventDefault()
      console.log('nappia painettu')
      const personObject = {
        name: this.state.newNote,
        id: this.state.persons.length + 1
    };
      const persons = this.state.persons.concat(personObject);
      (this.state.persons.filter(person =>
      person.name === personObject.name).length>0)
        ? console.log('Person already exists')
        : this.setState({
          persons,
          newName: ''
        });
      document.getElementById('inputFields').reset()
      console.log(this.state.persons)
  }
  handleNoteChange = (event) => {
      this.setState({ newNote: event.target.value })
    }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form id="inputFields">
          <div>
            nimi: <input onChange={this.handleNoteChange} />
          </div>
          <div>
            <button onClick ={this.addNote} type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {this.state.persons.map(person => <li key={person.id}> {person.name} </li>)}
      </div>
    )
  }
}

export default App
