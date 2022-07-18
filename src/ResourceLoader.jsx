import React, { useEffect } from 'react'
import { useState } from 'react'

export const ResourceLoader = ({children, resourceUrl, resourceName}) => {
    const [state,setState]= useState(null)
  useEffect(()=>{
    (async()=>{
        const response = await (await fetch(resourceUrl)).json()
        setState(response)
    })()
  },[resourceUrl])

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
