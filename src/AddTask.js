import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { addTaskToList } from "./tasksSlice";
import{useDispatch} from 'react-redux'


const AddTask=()=>{

const dispatch=useDispatch()

// const[id,setId]=useState(1)
 const [title,setTitle]= useState("")
 const [Description,SetDescription]=useState("")

 const AddTask1=(e)=>{
  e.preventDefault();
  console.log(title,Description);

  dispatch(addTaskToList({title,Description}))
  // setId(id+1)
  setTitle("")
  SetDescription("")

 }
    return(

      <div>
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

      <Button variant="danger" type="submit"
      
      onClick={(e)=>AddTask1(e)}>
        New task
      </Button>
    </Form>
    </section>
    </div>
    )
}
export default AddTask;