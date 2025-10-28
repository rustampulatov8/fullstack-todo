import React, { useEffect, useState } from "react";

const API_BASE = import.meta.env.PROD
  ? "https://fullstack-todo-x3bc.onrender.com/api/todos"
  : "http://localhost:4000/api/todos";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setError("");
        const res = await fetch(API_BASE);
        if (!res.ok) throw new Error("Failed to fetch todos");
        const data = await res.json();
        setTodos(data);
      } catch (e) {
        setError(e.message || "Error loading todos");
      }
    })();
  }, []);

  async function handleAdd(e) {
    e.preventDefault();
    if (!title.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title.trim() }),
      });
      if (!res.ok) throw new Error("Failed to add todo");
      const newTodo = await res.json();

      setTodos((prev) => [newTodo, ...prev]);
      setTitle("");
    } catch (e) {
      setError(e.message || "Error adding todo");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    const prev = todos;
    setTodos((t) => t.filter((x) => x.id !== id));

    try {
      const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete todo");
    } catch (e) {
      setTodos(prev);
      setError(e.message || "Error deleting todo");
    }
  }

  return (
    <div style={{ padding: "24px", color: "white", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ marginBottom: 12 }}>Fullstack ToDo App</h1>

      {/* adding form */}
      <form onSubmit={handleAdd} style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="what needs to be done?"
          style={{
            flex: 1,
            padding: "10px 12px",
            borderRadius: 8,
            border: "1px solid #444",
            background: "#111",
            color: "white",
            outline: "none",
          }}
        />
        <button
          type="submit"
          disabled={loading || !title.trim()}
          style={{
            padding: "10px 16px",
            borderRadius: 8,
            border: "1px solid #555",
            background: loading ? "#333" : "#1e90ff",
            color: "white",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "adding..." : "add"}
        </button>
      </form>

      {/* error */}
      {error && (
        <div style={{ color: "#ff6b6b", marginBottom: 12 }}>
          ⚠️ {error}
        </div>
      )}

      {/* list of todo */}
      {todos.length === 0 ? (
        <p style={{ opacity: 0.8 }}>I don't have anything</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 12px",
                border: "1px solid #333",
                borderRadius: 8,
                background: "#0d0d0d",
              }}
            >
              <span>{todo.title}</span>
              <button
                onClick={() => handleDelete(todo.id)}
                style={{
                  padding: "6px 10px",
                  borderRadius: 6,
                  border: "1px solid #444",
                  background: "#d9534f",
                  color: "white",
                  cursor: "pointer",
                }}
                title="Delete"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
