import React, { useState } from 'react'

function conditional() {
    let [mode,setmode]=useState(false)
  return (

    <>
    {/* <h1 style={{backgroundColor:mode?'black':'white',color:mode?'white':'black'}}>Hello my name is mohit</h1> */}

    {/* <button onClick={()=>{setmode(!mode)}}>{mode?"LIGHT MODE":"DARK MODE"}</button> */}
       

    {mode && <h1>hello i am mohit</h1>}
  

    <button onClick={()=>{setmode(!mode)}}>SHOW TEXT</button>
    </>
  )
}

export default conditional