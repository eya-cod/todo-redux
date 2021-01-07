import {ADDTASK, EDITTASK,COMPLETE, DELATE, SEEALL, SEEDONE, SEEUNDONE} from './ActionType'

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

                    export const seeA=()=>{
                        return{
                            type:SEEALL,
                            
                        }
                            }

                            export const seeD=()=>{
                                return{
                                    type:SEEDONE,
                                    
                                }
                                    }

                                    export const seeU=()=>{
                                        return{
                                            type:SEEUNDONE,
                                            
                                        }
                                            }