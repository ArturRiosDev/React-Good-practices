import React from 'react'
import { useRef } from 'react'



export const UncontrolledForm = () => {
    const nameInput = useRef(null)
    const ageInput = useRef(null)
    const professionInput = useRef(null)

    const handleSubmit = e =>{  
        e.preventDefault()
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        console.log(professionInput.current.value);
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Name' ref={nameInput}/>
        <input type="number" name='age' placeholder='Age' ref={ageInput} />
        <input type="text" name='profession' placeholder='profession' ref={professionInput} />
        <input type="submit" value='Submit'/>
    </form>
  )
}
