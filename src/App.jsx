import React from 'react'
const getm = (n,e)=>{
 console.log("helo "+n,e)
}




function App() {
  return (
     <>
     <p>

      <button onClick={(e)=>{console.log("ok" ,e)}}>new</button>
      <button onClick={()=>{getm("sss")}}>click</button>
        <br />
        <br />
      <button onClick={(e)=>{console.log("api kollo",e)}}>Click 2</button>
     </p>
     </>
  )
}

export default App
