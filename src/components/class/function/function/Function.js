import React,{useEffect, useState} from 'react'

const Function = (value) => {
    console.log(value);
    let {amount,name}=value.props
    let [amountvalue,setAmountvalue]=useState(amount);
    const [array,setArray]=useState([])
    // const[obj,setobj]=useState([
    //   amount:1,
    //   name:"jeee"
    // ])
   

   
    // const submit=()=>{
    //     console.log(amount)
    //     amount=2000
    //     console.log(amount)
    //     setAmountvalue(amount)
    // }
    useEffect(() => {
      console.log("keerthi")
    },[amountvalue]);

      const Increament = async()=>{
      await setAmountvalue((count) =>count+1);
      const  object={
     name:"keerthi",
     amount:amountvalue
      }
      setArray([
        ...array,object
      ])  
      } ; 
     
const Decreament =async ()=>{
      await setAmountvalue((count) =>count-1);
       const  object={
        name:"keerthi",
        amount:amountvalue
    };
    
    setArray([
      ...array,object
    ])  
  }


  return (
    <div className='text-center'>
        <h3>{name}</h3>
        <h3>{amountvalue}</h3>
        
       
        {/* <button onclick={submit}>submit</button> */}
         <button onClick={Increament}>Increament</button>
          <button onClick={Decreament}>Decreament</button>
          {array.map(({amount,name},i)=>
          (
            <ul key={i}>
  <li>{amount}</li>
  <li>{name}</li>


            </ul>
          
         ) )}
          

    </div>
  );
};

export default Function