import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ]);
  const [value, setValue] = useState('');

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const generateId = () => {
    return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  };

  const addTodo = (e) => {
    const content = value.trim();
    if(e.keyCode !== 13 || content === '') return; 

    setTodos((prevTodos) => [...prevTodos, {id: generateId(), content, completed: false}]);
    setValue('');
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const chekedChange = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => ( todo.id === id ? {...todo, completed: !todo.completed} : todo)));
  };

  console.log(todos);

  return (
    <>
      <div className="container">
        <h1 className="title">Todos</h1>
        <div className="ver">2.0</div>

        <input className="input-todo" placeholder="What needs to be done?" value={value} onChange={onChangeInput} onKeyUp={addTodo} autoFocus />
        <ul className="nav">
          <li id="all" className="active">All</li>
          <li id="active">Active</li>
          <li id="completed">Completed</li>
        </ul>

        <ul className="todos">
          {todos.map((todo)=> {
            return (
              <li key={todo.id} id={todo.id} className="todo-item">
                  <input className="custom-checkbox" type="checkbox" id={`ck-${todo.id}`} checked={todo.completed} onChange={()=> chekedChange(todo.id)} />
                  <label htmlFor={`ck-${todo.id}`}>{todo.content}</label>
                  <i className="remove-todo far fa-times-circle" onClick={() => removeTodo(todo.id)}></i>
              </li>
            );
          })}
        </ul>
        <div className="footer">
          <div className="complete-all">
            <input className="custom-checkbox" type="checkbox" id="ck-complete-all" />
            <label htmlFor="ck-complete-all">Mark all as complete</label>
          </div>
          <div className="clear-completed">
            <button className="btn">Clear completed (<span className="completed-todos">0</span>)</button>
            <strong className="active-todos">0</strong> items left
          </div>
        </div>
      </div>
    </>
    )
}

export default Todo; 