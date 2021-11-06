import React, { MouseEventHandler } from "react";
type AddtaskProps = {
  onClick: MouseEventHandler;
};
const AddTaskBtn = ({ onClick }: AddtaskProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "1rem 2rem",
        color: "var(--secondary)",
        fontWeight: 600,
        backgroundColor: "var(--primary)",
        outline: "none",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1.1rem",
      }}
    >
      {<i style={{ marginRight: "0.3rem" }} className="fas fa-plus-square"></i>}
      {"Add Task"}
    </button>
  );
};

export default AddTaskBtn;
