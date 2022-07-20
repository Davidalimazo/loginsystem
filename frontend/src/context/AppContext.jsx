import React, { createContext, useState } from 'react'
import { useJwt } from "react-jwt";

export const AppContext = createContext();



export default function AppContextProvider({children}) {
  const [token, setToken] = useState(()=>{
    localStorage.getItem('token')
  })
  const { decodedToken, isExpired } = useJwt(token);

  const [user, setUser] = useState(decodedToken)
  
    const [datacontext, setDatacontext] = useState([])
  return (
    <AppContext.Provider value={{setToken, user}}>
        {children}
    </AppContext.Provider>
  )
}
