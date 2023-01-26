import { useEffect, useRef, useState, useTransition } from "react";

const Task = (props) => {
  const { text, status, uid } = props.task;
  const { handleDelete } = props;
  const { handleCheck } = props;
  const { handleEdit } = props;
  const [viewEdit, setViewEdit] = useState(false);

  const [editInputValue, setEditInputValue] = useState("");

  const inputEditRef = useRef(null);

  const handleEditClick = (e, uid) => {
    e.preventDefault();
    handleEdit(editInputValue, uid);
    inputEditRef.current.value = "";
    setViewEdit(false);
  };

  return (
    <div>
      <div
        style={{
          background: "red",
          padding: "5px",
          margin: "5px",
          // width: "300px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <input
          type="checkbox"
          onChange={() => handleCheck(!status, uid)}
          checked={status}
        />
        <p>{text}</p>
        <button onClick={(e) => handleDelete(uid)}>delete</button>
        <button onClick={() => setViewEdit(!viewEdit)}>edit</button>
      </div>

      {viewEdit ? (
        <div>
          <form
            onSubmit={(e) => {
              handleEditClick(e, uid);
            }}
          >
            <input
              ref={inputEditRef}
              defaultValue={text}
              onChange={(e) => {
                setEditInputValue(e.target.value ? e.target.value : text);
              }}
              required
            />
            <button type="submit">submit</button>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export { Task };
