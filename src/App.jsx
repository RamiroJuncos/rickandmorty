import { useEffect, useState } from "react";
import "./App.css";
import { getChars } from "./services/rickandmorty";

function App() {
  const [charsData, setCharsData] = useState([]);
  async function getData() {
    let chars = await getChars();
    setCharsData(chars);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
        <h1>Rick and Morty</h1>
        <div>
          {charsData.map((item, index) => {
            return <div key={index}>{item.name}</div>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
