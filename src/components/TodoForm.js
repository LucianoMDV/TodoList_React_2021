import React, { useState, useEffect } from "react";

const initialFormValues = {
    title: '',
    description: '',
  };

const TodoForm = ({todoEdit, todoAdd, todoUpdate, setTodoEdit}) => {

  const [formValues, setFormValues] = useState(initialFormValues);
  const {title, description} = formValues;
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  
  useEffect(() => {
      if (todoEdit) {
          setFormValues(todoEdit);
      }
      else {
          setFormValues(initialFormValues);
      }
  }, [todoEdit])

  const handleInputChange = (e) => {
      const chandefFormValues = {
          ...formValues,
          [e.target.name]: e.target.value
      };

      setFormValues(chandefFormValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // comprobaciones obligatorias
    if (title.trim() === '') {

        setError('Debes indicar un titulo')
        setTimeout(() => {
            setError(null);
        }, 2000);
        return;
    }

    if (description.trim() === '') {
        setError('Debes indicar una descripcion')
        setTimeout(() => {
            setError(null);
        }, 2000);
        return;
    }

    
    if (todoEdit) {
        todoUpdate(formValues);
        setSuccessMessage('Actualizado con exito');
    } else {
        todoAdd(formValues);        
        setSuccessMessage('Agregado con exito');
        setFormValues(initialFormValues);
    }

    setTimeout(() => {
        setSuccessMessage(null);
    }, 2000);
    setError(null);
  }

  return (
    <div>
      <h1>{todoEdit ? 'Editar tarea': 'Nueva tarera'}</h1>
      
      {
          todoEdit && (
            <button
                className="btn btn-sm btn-warning"
                onClick={() => setTodoEdit(null)}
            >
                Cancelar edicion
            </button>

          )
      }
      
      <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Titulo" 
            className="form-control"
            value={title}
            name="title"
            onChange={handleInputChange} 
        />
        <textarea 
            placeholder="Descripcion" 
            className="form-control"
            value={description}
            name="description"
            onChange={handleInputChange}
        ></textarea>
        <button 
            type="submit" 
            className="btn btn-primary btn-block">
          {todoEdit ? 'Actualizar tarea' : 'Agregar tarea'}
        </button>
      </form>

        {
            // error
            // ? (
            //     <div className="alert alert-danger">
            //         { error }
            //     </div>
            // ) : (
            //     null
            // )
            error &&
            (
                <div className="alert alert-danger">
                    { error }
                </div>
            )
        }
        { 
            successMessage && 
            (
                <div className="alert alert-success">
                    { successMessage }
                </div>
            )
        }
    </div>
  );
};

export default TodoForm;
