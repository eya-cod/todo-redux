import React from 'react'
import {useDispatch} from 'react-redux'
import { seeA, seeU, seeD } from '../Const/Action'

const Filter = () => {
    const dispatch = useDispatch()

    const seetout=()=>{
        dispatch(seeA())

    }
    const seeDo=()=>{
        dispatch(seeD())

    }
    const seeUd=()=>{
        dispatch(seeU())

    }
    

    return (
        <div >
            <button className='filter' onClick={seetout}> all</button>
            <button className='filter' onClick={seeDo}> done</button>
            <button className='filter' onClick={seeUd}> undone</button>
        </div>
    )
}

export default Filter
