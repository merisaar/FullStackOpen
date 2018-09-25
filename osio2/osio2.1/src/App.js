import React from 'react'
import Kurssi from './components/Kurssi'
import './App.css';

// const App = ({notes}) => {
  // const { notes } = props;
  // const rivit = () => notes.map(note =>
  //   <li key={note.id}>
  //   {note.content}
  //   </li>
  // )
  // const result = notes.map(note => note.important )
  // console.log(result)
//   return (
//     <div>
//       <h1>Muistiinpanot</h1>
//       <ul>
//         {notes.map(note=><Note key={note.id} note={note}/>)}
//       </ul>
//     </div>
//   )
// }
const App = () => {
  // const kurssi = {
  //   nimi: 'Half Stack -sovelluskehitys',
  //   osat: [
  //     {
  //       nimi: 'Reactin perusteet',
  //       tehtavia: 10,
  //       id: 1
  //     },
  //     {
  //       nimi: 'Tiedonvälitys propseilla',
  //       tehtavia: 7,
  //       id: 2
  //     },
  //     {
  //       nimi: 'Komponenttien tila',
  //       tehtavia: 14,
  //       id: 3
  //     },
  //     {
  //       nimi: 'Redux',
  //       tehtavia: 7,
  //       id: 4
  //     }
  //   ]
  const kurssit = [
   {
     nimi: 'Half Stack -sovelluskehitys',
     id: 1,
     osat: [
       {
         nimi: 'Reactin perusteet',
         tehtavia: 10,
         id: 1
       },
       {
         nimi: 'Tiedonvälitys propseilla',
         tehtavia: 7,
         id: 2
       },
       {
         nimi: 'Komponenttien tila',
         tehtavia: 14,
         id: 3
       }
     ]
   },
   {
     nimi: 'Node.js',
     id: 2,
     osat: [
       {
         nimi: 'Routing',
         tehtavia: 3,
         id: 1
       },
       {
         nimi: 'Middlewaret',
         tehtavia: 7,
         id: 2
       }
     ]
   }
 ]


  return (
    <div>
      <Kurssi kurssit={kurssit} />
    </div>
  )
}
export default App
