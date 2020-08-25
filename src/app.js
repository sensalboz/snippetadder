import React, { useState, useEffect } from "react";
import Input from "./components/input";
import Container from "./components/container";

const App = () => {
  const [data, setData] = useState([]);

  const handleTerm = async (term) => {
    setData([...data, term]);
    await localStorage.setItem("input value", JSON.stringify(data));
  };

  return (
    <div>
      <Input handleTerm={handleTerm} />
      <Container />
    </div>
  );
};

export default App;
