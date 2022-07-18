import React, { useEffect } from 'react'
import { useState } from 'react'

export const UserLoader = ({children , userId}) => {
    const [user,setUser]= useState(null)
  useEffect(()=>{
    (async()=>{
        const response = await (await fetch(`/users/${userId}`)).json()
        setUser(response)
    })()
  },[userId])

  return(
        <>
        {React.Children.map(children,child=>{
            if(React.isValidElement(child)){
                return React.cloneElement(child,{user})
            }
            return child
        })}
        </>
  )

}
