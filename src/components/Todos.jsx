import { useRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";
import { useState } from "react";
import Todo from "./Todo";

export default function Todos() {
  const [todos, setTodos] = useRecoilState(todoState);
  const [inputText, setInputText] = useState(""); //sadece burada erişmek istedigimiz iiçin use state kullandık

  function addTodos() {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random(), text: inputText },
    ]);
    setInputText(""); //eklendikten sonra temizle
  }
  function handleInputChange(e) {
     
    setInputText(e.target.value);
  }
  function clearTodos() {
    setTodos([]);
  }

  return (
    <main>
      <input
        value={inputText}
        onChange={handleInputChange}
        type="text"
        id="todoInput"
      />
      <button onClick={addTodos}>Add todo</button>
      <button onClick={clearTodos}>Clear Todos</button>
      {todos.map((todo) => {
        return <Todo key={todo.id} text={todo.text} id={todo.id} />;
      })}
    </main>
  );
}
