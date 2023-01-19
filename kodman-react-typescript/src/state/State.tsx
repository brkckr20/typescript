import { useState } from "react";

const State = () => {
  const [name, setName] = useState("Burak");
  const [count, setCount] = useState(0);
  const [isTrue, setIsTrue] = useState(false);
  const [item, setItem] = useState(["one", "two"]);
  const [person, setPerson] = useState({ name: "Burak", age: 30 });

  const handleClick = () => {
    setName(name === "Burak" ? "Aynur" : "Burak");
  };

  const plus = () => {
    // setCount(count + 1);
    setCount((prev) => prev + 1);
  };
  const minus = () => {
    setTimeout(() => {
      setCount((prev) => prev - 10);
    }, 2500);
  };

  const age = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const arr1 = ["one", "two"];
  const arr2 = [...arr1, "thre", "for"];
  return (
    <>
      <div>Benim Adım : {name}</div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={plus}>artir</button>
      <button onClick={minus}>azalt</button>
      <br />
      <p>status : {isTrue ? "Doğru" : "Yanlış"}</p>
      <button onClick={() => setIsTrue((prev) => !prev)}>toggle</button>
      {item.map((i, k) => (
        <p key={k}>{i}</p>
      ))}
      <button
        onClick={() =>
          setItem((prev) => [...prev, `${Number(prev.length + 1)}`])
        }
      >
        Ekle
      </button>
      <hr />
      <button onClick={age}>YasArttir</button>
      {JSON.stringify(person)}
    </>
  );
};

export default State;
