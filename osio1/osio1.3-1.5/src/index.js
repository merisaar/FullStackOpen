import React from 'react'
import ReactDOM from 'react-dom'
import {Otsikko} from './components/otsikko.js'
import {Sisalto} from './components/sisalto.js'
import {Yhteensa} from './components/yhteensa.js'

//Tehtävä 1.3
// const App = () => {
//   const kurssi = 'Half Stack -sovelluskehitys'
//   const osa1 = {
//     nimi: 'Reactin perusteet',
//     tehtavia: 10
//   }
//   const osa2 = {
//     nimi: 'Tiedonvälitys propseilla',
//     tehtavia: 7
//   }
//   const osa3 = {
//     nimi: 'Komponenttien tila',
//     tehtavia: 14
//   }
//
//   return (
//     <div>
//       <Otsikko kurssi={kurssi}/>
//       <Sisalto osa1={osa1.nimi}  osa2={osa2.nimi}  osa3={osa3.nimi} tehtavia1={osa1.tehtavia} tehtavia2={osa2.tehtavia} tehtavia3={osa3.tehtavia}/>
//       <Yhteensa tehtavia1={osa1.tehtavia} tehtavia2={osa2.tehtavia} tehtavia3={osa3.tehtavia}/>
//     </div>
//   )
// }

//Tehtävä 1.4
// const App = () => {
//   const kurssi = 'Half Stack -sovelluskehitys'
//   const osat = [
//     {
//       nimi: 'Reactin perusteet',
//       tehtavia: 10
//     },
//     {
//       nimi: 'Tiedonvälitys propseilla',
//       tehtavia: 7
//     },
//     {
//       nimi: 'Komponenttien tila',
//       tehtavia: 14
//     }
//   ]
//   return (
//     <div>
//       <Otsikko kurssi={kurssi}/>
//       <Sisalto osa1={osat[0].nimi}  osa2={osat[1].nimi}  osa3={osat[2].nimi} tehtavia1={osat[0].tehtavia} tehtavia2={osat[1].tehtavia} tehtavia3={osat[2].tehtavia}/>
//       <Yhteensa tehtavia1={osat[0].tehtavia} tehtavia2={osat[1].tehtavia} tehtavia3={osat[2].tehtavia}/>
//     </div>
//   )
// }

//Tehtävä 1.5
const App = () => {
  const kurssi = {
      nimi: 'Half Stack -sovelluskehitys',
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14
        }
      ]
    }
    return (
    <div>
      <Otsikko kurssi={kurssi.nimi}/>
      <Sisalto osa1={kurssi.osat[0].nimi}  osa2={kurssi.osat[1].nimi}  osa3={kurssi.osat[2].nimi} tehtavia1={kurssi.osat[0].tehtavia} tehtavia2={kurssi.osat[1].tehtavia} tehtavia3={kurssi.osat[2].tehtavia}/>
      <Yhteensa tehtavia1={kurssi.osat[0].tehtavia} tehtavia2={kurssi.osat[1].tehtavia} tehtavia3={kurssi.osat[2].tehtavia}/>
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
