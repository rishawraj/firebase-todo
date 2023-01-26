import { useState } from "react";
import app from "../firebase";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase/compat";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";

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
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        required
      />
      <button type="submit">+</button>
    </form>
  );
};

export { Input };
