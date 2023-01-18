import { useState } from "react";

const State = () => {
  const [name, setName] = useState("Burak");
  const handleClick = () => {
    console.log("Tıklandı");
    setName(name === "Burak" ? "Aynur" : "Burak");
  };
  return (
    <>
      <div>Benim Adım : {name}</div>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default State;
