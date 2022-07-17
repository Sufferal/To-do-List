import React from "react";

const ListItem = ({ id, desc, completed, deleteTask, toggleTaskCompleted }) => {
  return (
    <div className="todo">
      <div className="c-cb">
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted(id)}
        />
        <label className="desc">{desc}</label>
      </div>

      <button className="btn btn-delete" onClick={() => deleteTask(id)}>
        &times;
      </button>
    </div>
  );
};

export default ListItem;
