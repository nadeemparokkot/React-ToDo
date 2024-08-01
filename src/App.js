import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');

  // Get current day of the week
  const getCurrentDay = () => {
    const daysOfWeek = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    const today = new Date().getDay();
    return daysOfWeek[today];
  };

  // Function to handle adding a new ToDo
  const addTodo = () => {
    if (toDo.trim()) {
      setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setTodo(''); // Clear the input field after adding
    }
  };

  // Function to handle toggling the status of a ToDo
  const toggleTodoStatus = (id) => {
    setTodos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  // Function to handle removing a ToDo
  const removeTodo = (id) => {
    setTodos(toDos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {getCurrentDay()} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo" key={obj.id}>
              <div className="left">
                <input
                  onChange={() => toggleTodoStatus(obj.id)}
                  checked={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p style={{ textDecoration: obj.status ? 'line-through' : 'none' }}>
                  {obj.text}
                </p>
              </div>
              <div className="right">
                <i
                  onClick={() => removeTodo(obj.id)}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
