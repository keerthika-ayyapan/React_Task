import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './student.css'
const Student = () => {
    const [formValue, SetformValue]=useState({
        name:"",
        email:"",
        number:"",
        password:"",
        c_paasword:"",
        gender:"",
        language:"",
        date:""

    })
   
    const params=useParams()
    console.log(params)
    const save=(e)=>{
        e.preventDefault();
       
    }
    const genderChange=(e)=>{
        const value = e.target.value;
        SetformValue({ ...formValue, gender: value });
    }
  return (
  <div className='student'>
  <div className=' studentform'>
    <div className='text-center text-dark'>
    <h1>Student</h1>
     <Link to={"/studentlist"} className='text-dark'>list</Link>
    </div> 
  <form className='mt-3 container' onSubmit={save}>
  <div  className="mt-2 input-group text-dark">
            <lable htmlFor="name" className="fs-5">Name</lable>
            <input type="text" id="name" value={formValue.name} onChange={(e)=>SetformValue({...formValue,name:e.target.value})} className="rounded " />           
        </div>
        <div  className="mt-2 input-group text-dark">
            <lable htmlFor="email" className="fs-5">Email</lable>
            <input type="email" id="email" className="rounded" value={formValue.email} onChange={(e)=>SetformValue({...formValue,email:e.target.value})} />
        </div>
        <div  className="mt-2 input-group text-dark">
            <lable htmlFor="number" className="fs-5">Phone Number</lable>
            <input type="number" id="number" className="rounded"  value={formValue.number} onChange={(e)=>SetformValue({...formValue,number:e.target.value})} />
        </div>
        <div  className="mt-2 input-group text-dark ">
            <lable htmlFor="password" className="fs-5">Password</lable>
            <input type="password" id="password" className="rounded"  value={formValue.password} onChange={(e)=>SetformValue({...formValue,password:e.target.value})}/>
        </div>
        <div  className="mt-2 input-group text-dark">
            <lable htmlFor="c-password" className="fs-5">Conform Password</lable>
            <input type="password" id="c_password" className="rounded"  value={formValue.c_paasword} onChange={(e)=>SetformValue({...formValue,c_paasword:e.target.value})} />
        </div>
        <div  className="mt-2 text-dark">
            <lable htmlFor="gender" className="fs-5" >Gender</lable>
            <br></br>
            <div className='mt-2'>
            <input type="checkbox"
                id="male"
                name="gender"
                value="male"
                onChange={genderChange} 
                checked={formValue.gender === "male"}/>
         <lable htmlFor="male"> Male</lable>
            </div>
            <div className='mt-2'>
            <input type="checkbox"
                id="female"
                name="gender"
                value="female"
                checked={formValue.gender === "female"}
                onChange={genderChange} />
         <lable htmlFor="female"> Female</lable>
            </div>
        </div>
        <div  className="mt-4 input-group text-dark">
            <lable htmlFor="language" className="fs-5">Language</lable>
            <select  id="language" className="rounded p-2 mt-3"  value={formValue.language} onChange={(e)=>SetformValue({...formValue,language:e.target.value})} >
                <option value = "">Select</option>
                <option value="tamil">tamil</option>
                <option value="english">english</option>
                <option value="hindi">hindi</option>
            </select>
            
        </div>
        <div  className="mt-4 input-group text-dark">
            <lable htmlFor="date" className="fs-5">Date of Birth</lable>
            <input type="date" id="date" className="rounded"  value={formValue.date} onChange={(e)=>SetformValue({...formValue,date:e.target.value})} />
        </div>
        <div className='text-center'>
      <button type='submit'>Submit</button>
        </div>
</form> 
    
    </div>
    </div>
  )
}
export default Student