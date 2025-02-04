import React, { useState } from "react";

interface TodoInputProps {
  addList: (inputText: string) => void;
}

function TodoInput({ addList }: TodoInputProps) {
  const [inputText, setInputText] = useState("");

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your To-Do"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className="add-button"
        onClick={() => {
          if (inputText.trim() !== "") {
            addList(inputText);
            setInputText("");
          }
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
