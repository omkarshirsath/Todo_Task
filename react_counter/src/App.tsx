import { useState } from "react";
import "./App.css";
import TodoInput from "./components/Todoinput";
import TodoList from "./components/TodoList";

function App() {
  const [listTodo, setListTodo] = useState<string[]>([]);

  const addList = (inputText: string) => {
    if (inputText.trim() !== "") {
      setListTodo([...listTodo, inputText]);
    }
  };

  const deleteTask = (index: number) => {
    setListTodo(listTodo.filter((_, i) => i !== index));
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <TodoList listTodo={listTodo} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
