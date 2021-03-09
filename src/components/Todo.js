import React from "react";

const Todo = ({ todo, todoDelete, todoToogleCompleted }) => {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <div className="row d-flex justify-content-end">
          <div className="col-auto">
            <h3 className="card-title text-end">{todo.title}</h3>
          </div>
          <div className="col-auto">
            <button 
                className={`btn btn-sm ${todo.completed ? 'btn-outline-success': 'btn-success'}`}
                onClick={() =>todoToogleCompleted(todo.id)}
            >
                {todo.completed ? 'Terminado': 'Terminar'}
            </button>
          </div>
        </div>
        <p className="card-text text-end">{todo.description}</p>
        <hr />
        <div className="d-flex gap-2">
          <div className="me-auto"></div>
          <button className="btn btn-sm btn-outline-primary ml-auto">
            Editar
          </button>
          <button 
            className="btn btn-sm btn-outline-danger"
            onClick={() => todoDelete(todo.id)}
          >
              Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
