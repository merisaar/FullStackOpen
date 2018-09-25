import React from 'react'

const Kurssi = ({ kurssit }) => {
  console.log(kurssit)
  const kurssi = kurssit.map(kurssi =>
    <div>
      <Otsikko nimi = {kurssi.nimi}/>
      <Sisalto kurssi = {kurssi}/>
      <Yhteensa osat = {kurssi.osat}/>
    </div>
    
  )
  return (
    <div>
      {kurssi}
    </div>
  )
}
const Otsikko = ({nimi}) => {
  console.log(nimi)
  return (
    <header>{nimi}</header>
  )
}
const Sisalto = ({ kurssi }) => {
  return (
    <Osa osat = {kurssi.osat}/>
  )
}
const Osa = ({osat}) => {
  const rivit = () => osat.map(osa =>
    <li key={osa.id}>
    {osa.nimi} {osa.tehtavia}
    </li>
  )
  return (
    <div>{rivit()}</div>
  )
}
const Yhteensa = ({ osat }) => {
  console.log(osat)
  //tehtävä 2.2
  // let yht = 0;
  // const yhteensa = osat.map((osa) => yht = osa.tehtavia+yht)
  //tehtävä 2.3
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const yhteensa = osat.map((osa) => osa.tehtavia).reduce(reducer)
  console.log(reducer)
  return (
    <li>Yhteensä {yhteensa} tehtävää</li>
  )
}

export default Kurssi
