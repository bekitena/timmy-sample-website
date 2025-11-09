import React, { useState } from 'react'
import { flushSync } from 'react-dom';

const Form = () => {
    const [form, setForm] = useState({
        username: "",
        email:"",
        password:""
    })
   
 

  function changeForm(e){

    const target = e.target.name
    console.log(target);
    
     setForm({
        ...form,
        [e.target.name]:e.target.value


     });
     
  }



  return (
    <div>
        <p>Username:{form.username} </p>
        <p>Email:{form.email} </p>
        <p>Password:{form.password} </p>
      <input name='username' type="text" placeholder='username' onChange={changeForm} /><br />
     
      <input name='lastname' type="text" placeholder='lastname' onChange={changeForm}/><br />
      <input name='password'  type="password" placeholder='password' onChange={changeForm}/>
      
    </div>
  )
}

export default Form
