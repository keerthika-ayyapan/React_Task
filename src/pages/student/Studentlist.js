import React from 'react'
import { useNavigate } from 'react-router-dom'

const Studentlist = () => {
    const nav=useNavigate()
    const handle=()=>{
        nav('/student/5')
    }
  return (
    <div>
        <h1>Studentlist</h1>
        <button onClick={handle}> click</button>
    </div>
  )
}

export default Studentlist