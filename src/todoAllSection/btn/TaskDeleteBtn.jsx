const TaskDeleteBtn = () =>{
    const handelAddToCart = () => {
        console.log("add task")
        
      };
      return(
        <div>
            <button onClick={handelAddToCart} className="btn">Delete</button>
        </div>
      )

}

export default TaskDeleteBtn;