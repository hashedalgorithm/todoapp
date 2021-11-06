import React, { MouseEventHandler } from "react";
import classes from "../styles/todocard.module.css";
import Button from "./Button";

interface InProgressCardProps {
  id: string;
  task: string;
  date: string;
  time: string;
  movetocompleted: (id: string) => MouseEventHandler;
  removetask: (id: string) => MouseEventHandler;
}
const InProgressCard = ({
  id,
  task,
  date,
  time,
  movetocompleted,
  removetask,
}: InProgressCardProps) => {
  return (
    <div className={classes.todocard}>
      <div className={classes.closebtn}>
        <i className="fas fa-times" onClick={() => removetask(id)}></i>
      </div>
      <h3 className={classes.tasktitle}>{task}</h3>
      <p className={classes.timeanddate}>
        {date}, {time}
      </p>
      <div className={classes.btndiv}>
        <Button text="done" onClick={() => movetocompleted(id)} />
      </div>
    </div>
  );
};

export default InProgressCard;
