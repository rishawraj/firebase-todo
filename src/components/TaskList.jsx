import app from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { Task } from "./Task";
import { useAuth } from "../contexts/AuthContext";

const firestore = app.firestore();

const TaskList = () => {
  const { currentUser } = useAuth();
  const tasksRef = firestore.collection(currentUser.email);
  const query = tasksRef.orderBy("createdAt");
  const [tasks] = useCollectionData(query, { idField: "uid" });

  const handleDelete = async (id) => {
    await deleteDoc(doc(firestore, currentUser.email, id));
  };

  const handleCheck = async (check, uid) => {
    const newTaskRef = doc(firestore, currentUser.email, uid);
    await updateDoc(newTaskRef, {
      status: check,
    });
  };

  const handleEdit = async (text, uid) => {
    const newTaskRef = doc(firestore, currentUser.email, uid);
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
