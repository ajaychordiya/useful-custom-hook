import useFetch from "./custom-hooks/useFetch";
import { useState } from "react";

const Trivia = () => {
  const [counter, setCounter] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${counter}/trivia`);
  return (
    <div>
      <h2>Trivia :</h2>
      {loading ? " loading" : data}
      <br />

      <br />

      <h4>Click on + to see the trivia of the number</h4>
      {counter}
      <button onClick={() => setCounter((c) => c + 1)}>+</button>
    </div>
  );
};

export default Trivia;
