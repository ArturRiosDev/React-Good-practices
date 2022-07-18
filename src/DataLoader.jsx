import React, { useEffect } from 'react'
import { useState } from 'react'

export const DataLoader = ({children, getFunc = ()=>{}, resourceName}) => {
    const [state,setState]= useState(null)
  useEffect(()=>{
    (async()=>{
        const response = await getFunc()
        setState(response)
    })()
  },[getFunc])

  return(
        <>
        {React.Children.map(children,child=>{
            if(React.isValidElement(child)){
                return React.cloneElement(child,{[resourceName]:state})
            }
            return child
        })}
        </>
  )

}
