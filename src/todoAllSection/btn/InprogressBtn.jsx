const InprogressBtn = () =>{
    const handelAddToCart = () => {
        console.log("add task ")
        
      };
      
      return(
        <div>
            <button onClick={handelAddToCart} className="btn btn-info">In Progress</button>
        </div>
      )

}

export default InprogressBtn;