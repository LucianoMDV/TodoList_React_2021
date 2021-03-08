import React from "react";

const Todo = () => {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <div className="row d-flex justify-content-end">
          <div className="col-auto">
            <h3 className="card-title text-end">Titulo de la tarea</h3>
          </div>
          <div className="col-auto">
            <button className="btn btn-sm btn-outline-success">Terminar</button>
          </div>
        </div>
        <p className="card-text text-end">Descripcion de la tarea</p>
        <hr />
        <div className="d-flex gap-2">
          <div className="me-auto"></div>
          <button className="btn btn-sm btn-outline-primary ml-auto">
            Editar
          </button>
          <button className="btn btn-sm btn-outline-danger">Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
