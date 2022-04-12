import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
   const [ modalIsOpen, setModaIsOpen] = useState(false);

   function deleteHandler() {
         setModaIsOpen(true);
   }

   function closeModalHandler() {
      setModaIsOpen(false);
}
    return (<div className='card'>
     <h2>{props.Text}</h2>
     <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
     </div>
      {modalIsOpen  && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> }
      {modalIsOpen  && <Backdrop onCancel={closeModalHandler} />} 
    
    </div>);
    
  }
  
  export default Todo;