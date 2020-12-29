import {ADDTASK, EDITTASK,COMPLETE, DELATE} from './ActionType'

export const addTask=(newTask)=>{
    
    return {
        type: ADDTASK,
        payload: newTask
    }
}
    export const delateTask=(id)=>{
return{
    type:DELATE,
    payload: id,
}
    }


    export const done=(isDone)=>{
        return{
            type:COMPLETE,
            payload: isDone
        }
            }
        
            export const editTodo=(newTodo)=>{
                return{
                    type:EDITTASK,
                    payload:newTodo
                }
                    }