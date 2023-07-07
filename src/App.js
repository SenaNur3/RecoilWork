import "./App.css";
import Todos from "./components/Todos";
import { RecoilRoot, useRecoilValue } from "recoil";
import { totalTodos } from "./state/selectors/TotalTodos";

function App() {
  const totalTodosState = useRecoilValue(totalTodos);
  return (
    <div className="App">
      <h2>Todo list</h2>
      <Todos />
      <h3>Total Todas: {totalTodosState}</h3>
    </div>
  );
}

export default App;
