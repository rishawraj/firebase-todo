import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import ForgotPassword from "./components/Auth/ForgotPassword";
import { TodoApp } from "./components/TodoApp";
import PrivateRoute from "./components/Auth/PrivateRoute";

function App() {
  return (
    <>
      <header>
        <h1>TODO APP</h1>
      </header>

      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router basename="/firebase-todo">
            <AuthProvider>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />

                <Route
                  path="/todo-app"
                  element={
                    <PrivateRoute>
                      <TodoApp />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </>
  );
}

export default App;
