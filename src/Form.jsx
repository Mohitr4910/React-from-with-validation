import React from 'react'
import  './App.css'
import { use, useState } from 'react'




let Form = () => {

  let [form, setform] = useState({
    name: '',
    contact: '',
    email: '',
    pass: '',
    c_pass: ''
  })


  let manageform = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })

  }



  let [error, seterror] = useState('')
  let Submit = (e) => {
    let name = form.name.trim()
    let contact = form.contact.trim()
    let email = form.email.trim()
    let pass = form.pass.trim()
    let c_pass = form.c_pass.trim()


    if (name == "") {

      e.preventDefault()
      seterror('Name required')

    }

    else if (contact.length != 10) {

      e.preventDefault()
      seterror('Enter valid contact')

    }
    else if (isNaN(contact)) {

      e.preventDefault()
      seterror('Enter valid contact')


    }
    else if (email == "") {

      e.preventDefault()
      seterror('Email required')

    }
    else if (!(email.includes("@") && email.includes(".com"))) {

      e.preventDefault()
      seterror('Enter valid email')

    }
    else if (pass == "") {
      e.preventDefault()
      seterror('Password required')
    }
    else if (!(pass.match(/[!@#$&*]/)&& pass.match(/[a-z]/)&& pass.match(/[1234567890]/))) {
      e.preventDefault()
      seterror('Enter Strong password use( 0-9,a-z,!@#$&* )')
    }
    else if (c_pass == "") {
      e.preventDefault()
      seterror('Confirm password required')
    }
    else if (!(pass==c_pass)) {
      e.preventDefault()
      seterror('Password and confirm not matched')
    }

  }



  return (
    <>
       
      <form onSubmit={Submit}  >
        <h2>Registration Form</h2>
    
        <p>{error}</p>
       <p>Name:</p><input type="text" name="name" value={form.name} onChange={manageform} /> <br /><br />
        <p>Contact: </p><input type="text" name="contact" value={form.contact} onChange={manageform} /><br /><br />
        <p>Email: </p><input type="text" name="email" value={form.email} onChange={manageform} /><br /><br />
       <p>Password:</p> <input type="text" name="pass" value={form.pass} onChange={manageform} /><br /><br />
        <p>Confirm Password:</p> <input type="text" name="c_pass" value={form.c_pass} onChange={manageform} /><br /><br />

        <button type="submit">Submit</button>

      </form>
    </>
  )
}

export default Form