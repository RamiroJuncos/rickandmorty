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
    <div className="min-h-screen bg-gray-800 p-8">
      <h1 className="text-4xl text-center text-white font-bold mb-10">
        <span className="text-green-500">Rick</span> and <span className="text-blue-500">Morty</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {charsData.map((item, index) => {
          return (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-600">Estado: {item.status}</p>
                <p className="text-sm text-gray-600">Especie: {item.species}</p>
                <p className="text-sm text-gray-600">Genero: {item.gender}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
