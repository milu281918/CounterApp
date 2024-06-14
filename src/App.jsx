
import './App.css'
import { useState } from 'react';
function App() {
  const[count,setcount]= useState(0);
 return(
<div className='counter-box border-1'>
  <div className="counter-header mt-6">
    <h2>Counter App</h2>
    <p className='counter mt-6'>{count}</p>
  <div className="counter-button mt-6">
    <button className="align-middle  text-center  py-3 px-6 rounded-lg bg-gray-900 text-white mr-6  " onClick={()=>setcount(count+1)}>
      +
    </button>
    <button className="align-middle  text-center  py-3 px-6 rounded-lg bg-gray-900 text-white mr-6"
     onClick={()=>setcount(count-1)}>
      -
    </button>
    <button className="align-middle  text-center  py-3 px-6 rounded-lg bg-gray-900 text-white " onClick={()=>setcount(0)}>
      reset
    </button>
  </div>
  </div>
</div>
 );

 
}

export default App
