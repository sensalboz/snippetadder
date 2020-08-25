import React, { useState, useEffect } from 'react';


const Input = () => {

  const [data, setData] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setData([...data, e.target.value]);
    await localStorage.setItem('data', JSON.stringify(data));
  }




  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add a note" onChange={(e) => setData(e.target.value)} />
      </form>
    </div>
  )
}

export default Input; 