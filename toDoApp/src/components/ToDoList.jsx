import "./toDoList.css";

/* eslint-disable react/prop-types */
const ToDoList = ({ todos, handleUpdateProgress, handleDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          <div>
            <input
              type="checkbox"
              value={todo.completed}
              defaultChecked={todo.completed}
              onClick={() => handleUpdateProgress(todo.id, "completed")}
            />
          </div>

          <div className="text-wrapper">
            {" " + todo.text}
            {" #" + todo.id}
          </div>
          <div>
            <button
              className="delete-button"
              onClick={() => handleDelete(todo.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
