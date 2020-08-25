import React, { useState, useEffect } from 'react';



const Container = ({ data }) => {

  const [data, useData] = useState([])


  useEffect(() => {
    const getData = async () => {
      const fetchData = await localStorage.getItem('data');
      const rendereditem = JSON.parse(fetchData)
      useData(rendereditem);
    }
    getData();
  }, [data])



  return (
    <div>
      <ul>
        {data.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Container; 