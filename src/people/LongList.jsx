import React from 'react'

export const LongList = ({person}) => {
  const {name, age, hairColor, hobbies} = person
  return (
    <>
      <h2>{name}</h2>
      <p>Age:{age} years</p>
      <p>haircolor: {hairColor}</p>
      <h3>Hobbies:</h3>
      {hobbies.map((hobby, i)=>{
        return <li key={i}>{hobby}</li>
      })}
    </>
  )
}
