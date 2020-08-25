import React from "react";
import Input from "./components/input";

const App = () => {
  const fetch = async () => {
    const data = await localStorage.getItem("data");
    console.log(data);
    const rendered = JSON.parse(data);
    console.log(rendered);
  };

  fetch();

  return (
    <div>
      <Input />
    </div>
  );
};

export default App;
