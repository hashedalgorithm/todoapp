import React, { MouseEventHandler, useState } from "react";
import classes from "../styles/overlay.module.css";
import Button from "./Button";
type OverlayProps = {
  handleclose: MouseEventHandler;
  addtask: ([]: Array<string>) => MouseEventHandler;
};
const Overlay = ({ handleclose, addtask }: OverlayProps) => {
  const [tastTitle, setTasktitle] = useState("");
  const [tastDate, setTaskdate] = useState("");
  const [tastTimee, setTasktime] = useState("");

  const onTaskChange = (task: string) => {
    setTasktitle(task);
  };
  const onDateChange = (date: string) => {
    setTaskdate(date);
  };
  const onTimeChange = (time: string) => {
    setTasktime(time);
  };
  return (
    <div className={classes.addtask}>
      <h1>Add New Task</h1>
      <input
        type="text"
        id="tasktitle"
        placeholder="task"
        onChange={(e) => {
          onTaskChange(e.target.value);
        }}
        value={tastTitle}
      />
      <div className={classes.secondline}>
        <input
          type="date"
          id="taskdate"
          placeholder="date"
          onChange={(e) => {
            onDateChange(e.target.value);
          }}
          value={tastDate}
        />
        <input
          type="time"
          id="tasktime"
          placeholder="time"
          onChange={(e) => {
            onTimeChange(e.target.value);
          }}
          value={tastTimee}
        />
      </div>
      <div className={classes.thirdline}>
        <Button
          text="Create"
          onClick={() => {
            addtask([tastTitle, tastDate, tastTimee]);
          }}
        />
        <Button text="Cancel" onClick={handleclose} />
      </div>
    </div>
  );
};

export default Overlay;
