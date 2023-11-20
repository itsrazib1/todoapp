const InprogressBtn = () =>{
    const handelAddToCart = () => {
        console.log("add task ")
        
      };
      
      return(
        <div>
            <button onClick={handelAddToCart} className="btn">In Progress</button>
        </div>
      )

}

export default InprogressBtn;