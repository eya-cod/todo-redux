import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import {editTodo} from '../Const/Action'
import {useDispatch} from 'react-redux'



const EditTask = ({el}) => {
    const [show, setShow] = useState(false);
    const [editedText, seteditedText] = useState("")

    const dispatch=useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const modifier=()=>{
        dispatch(editTodo({index:el.id, editedText:editedText}))
        handleClose()
        
    }
    return (
        <div>
        
      <Button style={{width:'90px', height:'30px', backgroundColor:'red', textAlign:'center',border:'none', fontWeight:'bold'}}  onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <input style={{border:'bold', height:'50px'}} onChange={(e) => seteditedText(e.target.value)} />
        <Modal.Footer>
          <Button style={{backgroundColor:'red'}} onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor:'red'}} onClick={modifier}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
           
        </div>
    )
}

export default EditTask
