import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Data() {
    const {user} = useContext(AppContext)
    if(user){
        return (
            <div>
               {
                user.map((data, i)=>{
                    const { username } = data;
                    return(
                        <div key={i}>{username}</div>
                    )
                })
               } 
            </div>
        )
    }else{
        return(<div>
                No Data to displays
            </div>)
    }

}
