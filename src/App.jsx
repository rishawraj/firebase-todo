import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import ForgotPassword from "./components/Auth/ForgotPassword";
import { TodoApp } from "./components/TodoApp";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <AuthProvider>
        <Router basename="/firebase-todo">
          <Header />

          <Container
            className="d-flex align-items-center justify-content-center"
            style={{
              flexGrow: 1,
              backgroundColor: "lavender",
              width: "100%",
            }}
          >
            <div>
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
            </div>
          </Container>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
