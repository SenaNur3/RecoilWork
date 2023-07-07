import { useSetRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";

export default function Todo({ text, id }) {
  const setTodos = useSetRecoilState(todoState);
  function deleteTodo() {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id); //prop gelen id ye eşit degilse
    });
  }
  return (
    <div>
      <p>{text}</p>
      <button onClick={deleteTodo}>X</button>
    </div>
  );
}
