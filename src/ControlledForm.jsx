import React from "react";
import { useState, useEffect } from "react";

export const ControlledForm = () => {
  const [nameInputError,setNameInputError] = useState('')
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [profession, setProfession] = useState('');

  useEffect(()=>{
    if(name.length < 3 ){
        setNameInputError('Name must be more than two characters')
    }else{
        setNameInputError('')
    }
  },[name])

  return (
    <form>
        {nameInputError && <p>{nameInputError}</p>}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={age}
        onChange={e => setAge(Number(e.target.value))}
      />
      <input
        type="text"
        name="profession"
        placeholder="profession"
        value={profession}
        onChange={e => setProfession(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
