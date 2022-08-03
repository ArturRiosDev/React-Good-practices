import React, {useState, useEffect} from "react";


export const withUser = (Component, userId) => {
  return props=>{
    const [user, setUser]= useState(null)
    
    useEffect(()=>{
        (async()=>{
            const response  = await fetch(`/users/${userId}`)
            setUser(response)
        })()
    },[])

    return <Component {...props} user={user}/>
  }
}
