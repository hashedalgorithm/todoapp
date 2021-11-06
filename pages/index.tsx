import Link from "next/link";
import { Fragment, MouseEventHandler, useState } from "react";
import AddTaskBtn from "../components/AddTaskBtn";
import CompletedCard from "../components/CompletedCard";
import InProgressCard from "../components/InProgressCard";
import NavbarItem from "../components/NavbarItem";
import Overlay from "../components/Overlay";
import TodoHead from "../components/TodoHead";
import { Tasks } from "../interfaces";
import classes from "../styles/home.module.css";
import { NavbarItems } from "../utils/sample-data";

const IndexPage = () => {
  const [task, setTask] = useState<Tasks[]>([]);
  const [inCompletedTask, setCompetedTask] = useState<Tasks[]>([]);
  const [overlay, setOverlay] = useState(false);

  const onHandleAddtaskClick = () => {
    setOverlay(!overlay);
  };

  const addTasktoTasklist = (data: Array<string>): MouseEventHandler => {
    const tempobj: Tasks = {
      id: data[0],
      tasktitle: data[0],
      time: data[2],
      date: data[1],
    };
    setTask([...task, tempobj]);
    setOverlay(!overlay);
    return;
  };

  const moveToCompleted = (id: string): MouseEventHandler => {
    const index = task.findIndex((obj) => obj.id === id);
    setCompetedTask([...inCompletedTask, task[index]]);
    RemoveTask(task[index].id);
    return;
  };

  const RemoveTask = (id: string): MouseEventHandler => {
    setTask(task.filter((item) => item.id !== id));
    return;
  };
  return (
    <Fragment>
      <div className={classes.layout}>
        <div className={classes.navbar}>
          {NavbarItems.map((item) => {
            return <NavbarItem title={item.title} icon={item.icon} />;
          })}
        </div>
        <div>
          <TodoHead />
          <div className={classes.mainarea}>
            <div className={classes.overlay}>
              {overlay ? (
                <Overlay
                  addtask={addTasktoTasklist}
                  handleclose={onHandleAddtaskClick}
                />
              ) : (
                <Fragment></Fragment>
              )}
            </div>
            <div className={classes.inprogress}>
              <h2 className={classes.inprogresshead}>In Progress</h2>
              <div className={classes.cardpopulationarea}>
                {task.map((item) => {
                  return (
                    <InProgressCard
                      id={item.id}
                      task={item.tasktitle}
                      time={item.time}
                      date={item.date}
                      movetocompleted={moveToCompleted}
                      removetask={RemoveTask}
                    />
                  );
                })}
              </div>
            </div>
            <hr />
            <div className={classes.inprogress}>
              <h2 className={classes.inprogresshead}>Completed</h2>
              <div className={classes.cardpopulationarea}>
                {inCompletedTask.map((item) => {
                  return (
                    <CompletedCard
                      id={item.id}
                      task={item.tasktitle}
                      time={item.time}
                      date={item.date}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className={classes.addtasksection}>
            <AddTaskBtn onClick={onHandleAddtaskClick} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default IndexPage;
