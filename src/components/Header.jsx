import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Header() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch {
      alert("failed to log out!");
    }
  };

  const style = {
    backgroundColor: "lightblue",
    width: "100%",
    display: "flex",
    justifyContent: `${currentUser ? "space-between" : "center"}`,
    alignItems: "center",
    padding: "10px 20px",
    height: "60px",
  };

  return (
    <header style={style}>
      <h1>Todo App</h1>

      {currentUser ? (
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: "bold", color: "cadetblue" }}>
            {currentUser.email}
          </div>
          <Button variant="secondary" onClick={handleLogout}>
            Sign out
          </Button>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
