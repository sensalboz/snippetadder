import React, { useState, useEffect } from 'react'



const Input = ({ handleFromApp }) => {

  const [inputValue, setInputValue] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setInputValue(inputValue);
    handleFromApp(inputValue)
    setInputValue('')
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder='add a note' onChange={(e) => { setInputValue(e.target.value) }} value={inputValue} />
      </form>
    </div>
  )
}

export default Input; 