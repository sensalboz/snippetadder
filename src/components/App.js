import React, { useState, useEffect } from "react";

import Input from "./inputs/input";
import Container from "./container/container";

const App = () => {
  const [data, setData] = useState([]);

  const handleFromApp = async (term) => {
    await setData([...data, term]);
    await localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <div>
      <Input handleFromApp={handleFromApp} />
      <Container />
    </div>
  );
};

export default App;
