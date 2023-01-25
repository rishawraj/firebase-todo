import app from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { Task } from "./Task";

const firestore = app.firestore();

const TaskList = () => {
  const tasksRef = firestore.collection("tasks");
  const query = tasksRef.orderBy("createdAt");
  const [tasks] = useCollectionData(query, { idField: "uid" });
  // console.log(tasks);

  const handleDelete = async (id) => {
    // tasksRef.doc(id).delete();
    await deleteDoc(doc(firestore, "tasks", id));
  };

  const handleCheck = async (check, uid) => {
    const newTaskRef = doc(firestore, "tasks", uid);
    await updateDoc(newTaskRef, {
      status: check,
    });
  };

  const handleEdit = async (text, uid) => {
    const newTaskRef = doc(firestore, "tasks", uid);
    await updateDoc(newTaskRef, {
      text: text,
    });
  };

  return (
    <>
      <h3>Task list</h3>
      {tasks &&
        tasks.map((task) => {
          return (
            <Task
              key={task.uid}
              task={task}
              handleDelete={handleDelete}
              handleCheck={handleCheck}
              handleEdit={handleEdit}
            />
          );
        })}
    </>
  );
};

export { TaskList };
