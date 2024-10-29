import AddToDO from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  const [todoItems, setToDoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {

    const newToDoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setToDoItems(newToDoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newToDoItems = todoItems.filter((item) => item.name !== todoItemName);
    setToDoItems(newToDoItems)
  };

  return (
    <>
    <AppName />

    <center className="todo-container">
      <AddToDO onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <ToDoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></ToDoItems>
    </center>
    </>
  );
}

export default App;
