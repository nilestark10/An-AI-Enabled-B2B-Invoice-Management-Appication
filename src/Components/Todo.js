import { useState } from "react";
import Modal from "./Modal";


function Todo(props){
  const [modalisopen, setmodalisopen] = useState(false)
  // const [modalisclose, setmodalisclose] = useState(true)
    function handleDelete(){
      setmodalisopen(true);
    }
    function closemodal(){
      setmodalisopen(false);
    }
    return(
        <div className="card">
        <h1>{props.text}</h1>
        <div className="actions">
        <button className="btn" onClick={handleDelete}>Delete</button>
        </div>
        {modalisopen && <Modal onConfirm={closemodal} onCancel={closemodal}/>}
        {/* {modalisopen && <Backdrop onCancel={closemodal}/>} */}
      </div>
    );
  
}
export default Todo;