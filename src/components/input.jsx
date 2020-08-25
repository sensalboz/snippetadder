import React, { useState, useEffect } from 'react';


const Input = ({ handleTerm }) => {

  const [data, setData] = useState('');


  const onSubmit = (e) => {
    e.preventDefault();
    setData(data);
    handleTerm(data)
  }


  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="add a note" onChange={(e) => setData(e.target.value)} />
      </form>
    </div>
  )
}

export default Input; 