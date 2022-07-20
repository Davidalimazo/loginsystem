import React, { useState } from 'react'
import { API } from './api'

export default function () {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
    
    if(name !=='' && password !==''){
      const data = {name, password}
      await API.post('/login', data).then(res=>console.log(res.config)).catch(err=>console.log(err.config))
    }else console.log("fields are required");
  }
    
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
           <input type="text" name="username" id="" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
           <input type="text" name="password" id="" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
           <button type='submit'>Login</button>
        </form>
    </div>
  )
}
