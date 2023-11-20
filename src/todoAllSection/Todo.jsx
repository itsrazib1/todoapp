import { useEffect, useState } from "react";
import InprogressBtn from "./btn/inprogressBtn";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/todo")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

  const handleTaskSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task_name: newTask }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodo([...todo, data]);
        setNewTask("");
      });
  };

  const handleMoveToInProgress = async (taskId) => {
    const taskToMove = todo.find((task) => task._id === taskId);
  
    // Remove the task from the todo list
    const updatedTodo = todo.filter((task) => task._id !== taskId);
    setTodo(updatedTodo);
  
    try {
      // Send a request to move the task to inProgress on the server
      const response = await fetch(`http://localhost:5000/inprogress`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskToMove),
      });
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`Failed to move task to inProgress. Status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      // If an error occurs, you may want to handle it (e.g., show an error message or revert the state)
    }
  };
  

  return (
    <div className="overflow-x-auto">
      <form onSubmit={handleTaskSubmit}>
        <label>
          Task Name:
          <input
            type="text"
            className="border border-black rounded-md mx-3"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </label>
        <button className="bg-cyan-500 px-3 rounded-md text-white" type="submit">
          Add Task
        </button>
      </form>

      <table className="table ">
        <thead>
          <tr>
            <th>No</th>
            <th>Task Name</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todo.map((todos, index) => (
            <tr key={todos._id}>
              <th>{index + 1}</th>
              <td>{todos.task_name}</td>
              <td></td>
              <td>
                <InprogressBtn onClick={() => handleMoveToInProgress(todos._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
