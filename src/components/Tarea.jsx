import { useState } from "react";
import ListaTareas from "./ListaTareas";

function Tarea() {
  const [misTareas, setMisTareas] = useState([]);
  function agregarTarea(e) {
    e.preventDefault();
    const nuevaTarea = e.target.nuevaTarea.value;
    return setMisTareas([...misTareas, nuevaTarea]);
  }

  return (
    <>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-cyan-600">Nueva Tarea</h2>
            <form onSubmit={(e) => agregarTarea(e)}>
              <input id="nuevaTarea" className="border" type="text" />
              <div className="card-actions justify-end">
                <button type="submit" className="btn btn-primary">
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
        <ListaTareas tareas={misTareas} />
      </div>
    </>
  );
}

export default Tarea;
