const TaskDeleteBtn = () =>{
    const handelAddToCart = () => {
        console.log("add task")
        
      };
      return(
        <div>
            <button onClick={handelAddToCart} className="btn btn-error">Delete</button>
        </div>
      )

}

export default TaskDeleteBtn;