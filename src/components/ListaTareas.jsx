function ListaTareas(props) {
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      {props.tareas.map((tarea, index) => {
        return (
          <div key={index} className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Tarea {index+1}</h2>
              <p>{tarea}</p>
              <div className="card-actions justify-end">
                <button className="btn">Eliminar</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ListaTareas;
