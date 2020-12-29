import React from 'react'
import {useDispatch} from 'react-redux'
import {delateTask} from '../Const/Action'
import {done} from '../Const/Action'

import EditTask from './EditTask'


function Task({el}) {
    
    const dispatch=useDispatch()

    const supp=()=>{
        dispatch(delateTask(el.id))
    }

    const compl=()=>{
        dispatch(done(el.id))
    }

    
    return (
        <div>
            <p>{el.text}</p>
            
            <EditTask el={el}/>
            
            
            <button style={(el.done) ? {textDecoration:'line-through'} : {textDecoration:'none'}} className="addBtn" onClick={compl}>Done</button>
            <button className="addBtn" onClick={supp} >Delete</button>
            
        </div>
    )
}

export default Task
