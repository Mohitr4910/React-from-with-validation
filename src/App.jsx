import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let [count, setCount] = useState(0)
  // let Inc=()=>{
  //   setCount(count+1)
  // }
  // let Dnc=()=>{
  //   setCount(count-1)
  // }
  // let reset=()=>{
  //   count=setCount(0)
  // }
  
  // let[name,setname]=useState('')
  // let[city,setcity]=useState('')
  // let[age,setage]=useState('')

  // let [form, setform]=useState({
  //   myname:'',
  //   myage:'',
  //   mycity:''
  // })



    //  let myname=(e)=>{
    //    setname(e.target.value)
    //  }



    //  let myname=(e)=>{
    //   setform({...form, [e.target.name]:e.target.value})
      
    //  }


    

  return (
    <>
       {/* <h1>{count}</h1> */}
       {/* <button onClick={Inc}>INC</button>
       <button onClick={Dnc} disabled={count==0}>DNC</button>
       <button onClick={reset}>Reset</button> */}
{/* 
    Name: <input type="text" name='myname' value={form.myname} onChange={myname} /><br /><br />
    Age: <input type="text" name='myage' value={form.myage} onChange={myname} /><br /><br />
    City: <input type="text" name='mycity' value={form.mycity} onChange={myname} /><br /><br /> */}

    {/* City <input type="text" value={city} onChange={()=>{setcity(e.target.value)}} /><br /><br />
    age<input type="text" value={age} onChange={myage} /><br /><br /> */}
     {/* <p>My name is {name} i am from {city} and my age {age} </p> */}
    {/* Name: <p>{form.myname}</p>
    Age: <p>{form.myage}</p>
    City: <p>{form.mycity}</p> */}

    </>
  )
}

export default App
