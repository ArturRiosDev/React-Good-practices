import React, { useEffect } from 'react'
import { useState } from 'react'

export const CurrentUserLoader = ({children}) => {
    const [user,setUser]= useState(null)
  useEffect(()=>{
    (async()=>{
        const response = await (await fetch('/current-user')).json()
        setUser(response.user)
    })()
  },[])

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
