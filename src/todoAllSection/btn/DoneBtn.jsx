const DoneBtn = () =>{
    const handelAddToCart = () => {
        console.log("add task")
        
      };
      return(
        <div>
            <button onClick={handelAddToCart} className="btn btn-success">Done</button>
        </div>
      )

}

export default DoneBtn;