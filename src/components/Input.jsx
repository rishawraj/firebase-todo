import { useState } from "react";
import app from "../firebase";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase/compat";
// import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

const firestore = app.firestore();
// const firestore = getFirestore(app);

const Input = () => {
  const [value, setValue] = useState("");

  const tasksRef = firestore.collection("tasks");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newId = uuidv4();

    await setDoc(doc(firestore, "tasks", newId), {
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: newId,
      status: false,
    });

    // await tasksRef.add({
    //   text: value,
    //   createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    //   // uid: firebase.firestore.FieldValue.id(),
    //   uid: uuidv4(),
    //   status: false,
    // });

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
