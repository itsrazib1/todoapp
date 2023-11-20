import Done from "../todoAllSection/Done";
import Todo from "../todoAllSection/Todo";
import InProgress from "../todoAllSection/inProgress";

const TodoList = () => {
  return (
    <div >
      <div className="sm:flex flex-none  gap-10">
      <Todo/>
      <InProgress/>
      <Done/>
      </div>
      
      
    </div>
  );
};

export default TodoList;
