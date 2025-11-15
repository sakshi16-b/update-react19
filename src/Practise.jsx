import React from 'react'

const Practise = () => {
    const students=[]
  return (
  <>

 <p>Case 1: {students.length && "No students Found"}</p>
  {/* we want to display the msg no students found; */}
<p>  {students.length===0 &&"No students found"}</p>
  <p>Number of Students :{students.length}</p>
  </>    
  )
}

export default Practise
