import { useEffect, useState } from "react";
import TaskDeleteBtn from "./btn/TaskDeleteBtn";

const Done = () => {
  const [done, setDone] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/done')
      .then(res => res.json())
      .then(data => setDone(data));
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="text-center py-5 pb-12 font-bold">DONE TASK HERE</div>
      <table className="table  ">
        {/* head */}
        <thead>
          <tr>
            <th>No</th>
            <th>Task Name</th>
          </tr>
        </thead>
        <tbody>
          {
            done.length > 0 ? (
              done.map((task, index) => (
                <tr key={task._id}>
                  <th>{index + 1}</th>
                  <td>{task.task_name}</td>
                  <td></td>
                  <td><TaskDeleteBtn /></td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-slate-400" colSpan="4">No tasks in Done</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default Done;
