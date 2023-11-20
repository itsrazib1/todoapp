import { useEffect, useState } from "react";
import DoneBtn from "./btn/DoneBtn";

const InProgress = () => {
  const [inprogress, setInprogress] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/inprogress')
      .then(res => res.json())
      .then(data => setInprogress(data));
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="text-center py-5 pb-12 font-bold">In Progress HERE</div>
      <table className=" table">
        <thead>
          <tr>
            <th>No</th>
            <th>Task Name</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            inprogress.length > 0 ? (
              inprogress.map((task, index) => (
                <tr key={task._id}>
                  <th>{index + 1}</th>
                  <td>{task.task_name}</td>
                  <td></td>
                  <td className=""><DoneBtn /></td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-slate-400" colSpan="4">No tasks in Progress</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default InProgress;
