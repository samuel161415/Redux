import React, { useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,incrementByValue,incrementAsycnc, incrementIfOdd } from './counterSlice';

function Counter() {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  const status = useSelector((state) => state.counter.status)
  
  const [incrementVal, setIncrementVal] = useState(2)

  return (
    <div class = 'flex flex-col  border-2  h-screen justify-center items-center'>
      <div class = 'm-4'> <AccessTimeIcon / > </div>
      <div class = 'm-4'>
          <span class = 'cursor-pointer bg-blue-200 p-3 rounded hover:bg-blue-300 ' onClick={() =>{dispatch(increment())}}>
            < AddIcon /> </span> 
          <span class = {`m-4 p-3  border-2 rounded ${status ==='loading' ?'bg-slate-400':'bg-slate-300'}`}>{count}</span> 
          <span class = 'cursor-pointer bg-blue-200 p-3 rounded hover:bg-blue-300 ' onClick={() =>{dispatch(decrement())}}>
            < RemoveIcon /></span>
        </div>
      <div class = 'flex'>
        <input type="Number" class = 'p-3 border-2 rounded ' value={incrementVal} onChange={(e) =>{setIncrementVal(e.target.value)}} /> 
        <button class = 'm-3 p-3 bg-purple-300 rounded' onClick={() =>{dispatch(incrementByValue(Number(incrementVal)))}} >Add Amount</button>
        <button class = {`m-3 p-3 bg-purple-300 rounded `} onClick={() =>{dispatch(incrementAsycnc(Number(incrementVal)))}} > Add Async</button>
        <button class = 'm-3 p-3 bg-purple-300 rounded' onClick={() =>{dispatch(incrementIfOdd(Number(incrementVal)))}} > Add If Odd</button>

      </div>
      
      <div>counter</div>
    </div>
  )
}

export default Counter