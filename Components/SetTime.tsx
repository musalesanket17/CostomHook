import { SetTime } from "../CostomHooks/Settimeout"

 
  

  export const SS=()=>{
     
     const Time = SetTime(2)
 
    if(!Time){
       return <h1>Wait 3 Sec</h1>
    }

     return(
        <>
         <h1>Hello</h1>
        </>
     )
     
  }