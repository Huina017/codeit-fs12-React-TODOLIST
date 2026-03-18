import React, { useState } from 'react'
import styles from "./App.module.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      title: input,
      completed: false,
      createdAt: new Date().toLocaleString(),
    };

    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>Todo List</h1>
      <div>
        <input
          type='text'
          value={input}
          placeholder='할일 입력...'
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>추가</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li style={{ listStyle: "none" }} key={todo.id}>
            <div className={todo.completed ? styles.completed : ""}>
              {todo.title}
            </div>

            <div>{todo.createdAt}</div>

            <button onClick={() => handleToggle(todo.id)}>
              {todo.completed ? "취소" : "완료"}
            </button>

            <button onClick={() => handleDelete(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  )
}
