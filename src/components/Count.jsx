import React, { useState } from 'react'

const Form = () => {

  const [form, setForm] = useState({
    firstname:"",
    lastname:"",
    fullname:""
  })

 function changeForm(e){
  const target = e.target.name;
  
  
  setForm({
    ...form,
    [e.target.name]:e.target.value
  })
 }
   function enterButton(){
    
    alert("Successful!");
  }
  



  return (
    <div>
      <label>
        First name:
        <input name='firstname' type='text' placeholder='first name' onChange={changeForm} />
        <p>firstname:{form.firstname}</p>
      </label>
      <label>
        last name:
        <input name='lastname' type='text' placeholder='last name'  onChange={changeForm}/>
                <p>lastname:{form.lastname}</p>

      </label>
       <label>
        Full name: 
        {/* <input name='fullname' type='text' placeholder='full name'  onChange={changeName}/> */}
            <p>{form.firstname} {form.lastname}</p>
      </label>
      <button onClick={enterButton} >Enter</button>
    </div>
  )
}

export default Form


