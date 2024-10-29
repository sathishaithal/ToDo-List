import { MdDeleteForever } from "react-icons/md";
import styles from "./ToDoItem.module.css";

function ToDoItem({ todoName, todoDate, onDeleteClick }) {
  return (
      <div className={`container text-center ${styles.todoContainer}`}>

      <div className={`row ToDo-row ${styles.todorow}`}>
        <div className="col-7">{todoName}</div>
        <div className="col-3">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger ToDo-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDeleteForever />

          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
