import React, { useState } from 'react'

const Container = () => {

  const [data, setData] = useState([]);

  const getItem = async () => {
    const response = await localStorage.getItem('input value');
    const render = JSON.parse(response);
    setData(render);
    console.log(render)
  }

  getItem();


  return (
    <div>
      <h1>
        <ul>
          {data.map((li, index) => {
            return <li key={index}> {li} </li>
          })}
        </ul>
      </h1>
    </div>
  )
}

export default Container; 