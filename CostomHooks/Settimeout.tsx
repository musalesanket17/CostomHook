import { useEffect, useState } from "react"

 
 export const SetTime=(delay : number)=>{
     
     const [state,setState] = useState(false)

     useEffect(()=>{
         
         let id=setTimeout(()=>{
             setState(true)
         },delay * 1000)

         return ()=>clearTimeout(id)
     },[])

     return state
     
 }