import { Input } from "./Input";
import { TaskList } from "./TaskList";

const TodoApp = () => {
  return (
    <>
      {/* <div style={{ backgroundColor: "lightgreen", width: "600px" }}> */}
      <Input />
      <TaskList />
      {/* </div> */}
    </>
  );
};

export { TodoApp };
