import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/todos")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch todos");
        return res.json();
      })
      .then(setTodos)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ padding: "2rem", color: "white", fontFamily: "sans-serif" }}>
      <h1>Fullstack ToDo App</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {todos.length === 0 ? (
        <p>No todos found.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
