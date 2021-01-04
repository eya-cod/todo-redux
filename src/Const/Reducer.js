import { ADDTASK, COMPLETE, DELATE, EDITTASK } from "./ActionType"



const initState ={
    tasks:[]
}
const Reducer =(state=initState, action)=>{
    switch (action.type) {

        case ADDTASK:
    return {...state, tasks:[...state.tasks,action.payload]}

    case DELATE:
    return {...state, tasks:[ ...state.tasks.filter(tasks=>tasks.id!==action.payload)]}

    case COMPLETE:
        return {...state, tasks: [...state.tasks.map(tasks=>tasks.id===action.payload?{...tasks,isDone:!tasks.isDone}:tasks)]}
    
        case EDITTASK:
        return {...state, tasks: [...state.tasks.map(tasks=>tasks.id===action.payload.index?{...tasks,text:action.payload.editedText}:tasks)]}
    
        default:
        return state   
    }
}
export default Reducer