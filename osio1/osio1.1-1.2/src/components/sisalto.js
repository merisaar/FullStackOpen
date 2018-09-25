import React from 'react'

export const Sisalto= (props) => {

  return (
    /*<p>{props.osa1} {props.tehtavia1}</p>
    <p>{props.osa2} {props.tehtavia2}</p>
    <p>{props.osa3} {props.tehtavia3}</p>*/
    <div>
      <Osa osa = {props.osa1} tehtavia ={props.tehtavia1}/>
      <Osa osa = {props.osa2} tehtavia ={props.tehtavia2}/>
      <Osa osa = {props.osa3} tehtavia ={props.tehtavia3}/>
    </div>
  )
}

const Osa= (props) => {
  return (
       <p>{props.osa} {props.tehtavia}</p>
  )
}
