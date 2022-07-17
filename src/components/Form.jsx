import React, { useState } from "react";

const Form = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      return;
    }

    addTask(input);
    setInput('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input input-text"
        type="text"
        placeholder="write a task..."
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-add">Add</button>
    </form>
  );
};

export default Form;
