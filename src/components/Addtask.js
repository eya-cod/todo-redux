import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTask} from '../Const/Action'


function Addtask() {
    const [input, setinput] = useState('')

    const dispatch=useDispatch()
    const handleAdd=()=>{

        const newTodo={
        id:Math.random(),
        text:input,
        isDone: false

    } 
        dispatch(addTask(newTodo))
        setinput('')
    }

    return (
        <div>
            <input className='input' type='text' value={input} onChange={e=>setinput(e.target.value)} />
            <button className='addBtn' onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Addtask
