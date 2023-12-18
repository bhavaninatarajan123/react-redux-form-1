import React,{useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import{useSelector,useDispatch} from 'react-redux';

import { updateTaskInList } from "./tasksSlice";
import { addTaskToList } from "./tasksSlice";

const  MyVerticallyCenteredModal=(props)=>{

  const{selectedTask}=useSelector((state)=>state.tasks)

    const [title,setTitle]= useState("")
 const [Description,SetDescription]=useState("")


const dispatch=useDispatch()

 const updateTask=()=>{
    props.onHide()
    dispatch(updateTaskInList({title,Description}))

    console.log(title,Description)
 }
 useEffect(()=>{
     if(Object.keys(selectedTask).length !==0){
     setTitle(selectedTask.title)
         SetDescription(selectedTask.Description)
       
   }
    
},[selectedTask])

    return(
        <div>
            <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          update task 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <section className="my-4">
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Enter Task name</Form.Label>
        <Form.Control type="text" placeholder="Enter Task name"
        value={title}
             onChange={(e)=>setTitle(e.target.value)} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Enter Task Description </Form.Label>
        <Form.Control type="text" placeholder="Enter Task Description"

        value={Description}
           onChange={(e)=>SetDescription(e.target.value)}  />
      </Form.Group>

     
    </Form>
    </section>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="primary" type="submit"
      
      onClick={(e)=>updateTask(e)}>
        update task
      </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  </div>

    
    )
}

export default  MyVerticallyCenteredModal ;
