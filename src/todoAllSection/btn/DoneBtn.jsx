const DoneBtn = () =>{
    const handelAddToCart = () => {
        console.log("add task")
        
      };
      return(
        <div>
            <button onClick={handelAddToCart} className="btn">Done</button>
        </div>
      )

}

export default DoneBtn;