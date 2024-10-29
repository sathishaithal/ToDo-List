import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddToDO({ onNewItem }) {
  const [todoName, setToDoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setToDoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleButtonCliked = () => {
    if (todoName && dueDate) {
      onNewItem(todoName, dueDate);
      setDueDate("");
      setToDoName("");
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div className="container text-center">
      <div className="row ToDo-row">
        <div className="col-7">
          <input
            type="text"
            placeholder="Enter ToDo Here"
            value={todoName}
            onChange={handleNameChange}
            required 
          />
        </div>
        <div className="col-3">
          <input
            type="date"
            value={dueDate}
            onChange={handleDateChange}
            required 
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success ToDo-button"
            onClick={handleButtonCliked}
          >
            <IoMdAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDO;
