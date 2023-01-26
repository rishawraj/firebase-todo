import { useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

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
    <>
      <div
        style={{
          height: "60px",
          backgroundColor: "lightpink",
          border: "1px solid red",
          padding: "5px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <Form.Check
          onChange={() => handleCheck(!status, uid)}
          checked={status}
        />

        <div
          style={{
            fontWeight: "500",
            textTransform: "capitalize",
            // alignSelf: "center",
          }}
        >
          {text}
        </div>

        <div style={{ display: "flex", gap: "6px" }}>
          <Button variant="danger" onClick={(e) => handleDelete(uid)}>
            delete
          </Button>
          <Button
            // disabled={true}
            onClick={() => setViewEdit(!viewEdit)}
            variant="secondary"
          >
            edit
          </Button>
        </div>
      </div>

      <div>
        {viewEdit ? (
          <div>
            <Form
              onSubmit={(e) => {
                handleEditClick(e, uid);
              }}
              className="d-flex gap-3 p-2 mb-2"
            >
              <Form.Control
                ref={inputEditRef}
                /* defaultValue={text}*/
                // value={text}
                onChange={(e) => {
                  setEditInputValue(e.target.value ? e.target.value : text);
                }}
                required
              />
              <Button variant="success" type="submit">
                submit
              </Button>
            </Form>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export { Task };
