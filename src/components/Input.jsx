import { useState } from "react";
import app from "../firebase";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase/compat";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Stack } from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";

const firestore = app.firestore();

const Input = () => {
  const [value, setValue] = useState("");
  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newId = uuidv4();

    await setDoc(doc(firestore, currentUser.email, newId), {
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: newId,
      status: false,
    });

    setValue("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="mb-3 mt-3">
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            className="me-auto"
            placeholder="Add your task here..."
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            required
          />
          <Button type="submit" variant="success">
            Add
          </Button>
        </Stack>
      </Form>
    </>
  );
};

export { Input };
