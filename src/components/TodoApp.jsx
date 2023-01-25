import { Input } from "./Input";
import { TaskList } from "./TaskList";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const TodoApp = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogut() {
    try {
      await logout();
      navigate("/");
    } catch {
      alert("failed to log out!");
    }
  }

  return (
    <>
      <p>{currentUser.email}</p>
      <button onClick={handleLogut}>logout</button>
      <Input />
      <TaskList />
    </>
  );
};

export { TodoApp };
